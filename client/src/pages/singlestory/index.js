import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { address, apiroutes } from "../../assets/data";
import ImageGrid from "../../components/elements/ImageGrid";
import OrientedImage from "../../components/elements/OrientedImage";
import PageHeadLine from "../../components/elements/PageHeadline";
import Pagination from "../../components/Pagination";
import getImageOrientation from "../../utility/getImageOrientation";
import TransitionWrapper from "../../utility/TransitionWrapper";

const PageSize = 3;

function SingleStory() {
  const fileRef = useRef();
  const myRef = useRef(null);
  const executeScroll = (to) =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: to });

  const [story, setStory] = useState();
  const [storyImages, setStoryImages] = useState([]);
  const [file, setFile] = useState(null);
  const [orientation, setOrientation] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("story")[1];
  const PF = address[2].url;

  const user = "DG";

  const [currentPage, setCurrentPage] = useState(1);

  const currentGridData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return storyImages.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, storyImages]);

  // Fetching singlestory from the API
  // Fetches and filters all story gallery images
  useEffect(() => {
    const getStory = async () => {
      const res = await axios.get(`${apiroutes[6].url}${path}`);
      setStory(res.data);
    };
    const fetchStoryImages = async () => {
      const res = await axios.get(apiroutes[4].url);
      setStoryImages(res.data.filter((i) => i.story === path));
    };
    fetchStoryImages();
    getStory();
  }, []);

  //Handler for submitting a photo for singlestory
  const handleSubmit = async () => {
    const newStoryPhoto = {
      username: user,
      story: story._id,
    };
    // Restriction for files: jpeg,jpg and png only, also the size has to be
    // maximal 3000000 ( 3mb )
    if (file) {
      if (file.name.match(/\.(jpeg|jpg|png)$/) && file.size <= 3000000) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newStoryPhoto.photo = filename;
        newStoryPhoto.orientation = orientation;
        //Uploading file to server
        try {
          await axios.post(apiroutes[5].url, data);
        } catch (err) {}
        //Posting  on MongoDB
        try {
          await axios.post(apiroutes[4].url, newStoryPhoto);
          setFile(null);
        } catch (err) {}

        // document.getElementById("form-reset").reset();
      } else {
        setFile(null);
      }
    }
  };

  // Handler for getting image orientation
  const handleInput = async (e) => {
    setFile(e.target.files[0]);
    let imgOrientation = await getImageOrientation(e.target.files);
    setOrientation(imgOrientation);
    executeScroll("end");
  };

  useEffect(() => {
    if (currentPage !== 1) {
      executeScroll("center");
    }
  }, [currentGridData, currentPage]);

  return (
    <TransitionWrapper>
      <main>
        <div className="home-bg bg-setup">
          {story && (
            <>
              <PageHeadLine headline={story.story} />
              <div className="card-setup py-4 md:py-10">
                <OrientedImage
                  orientation={story.orientation}
                  image={story.photo}
                  path={PF}
                  alt="Single story"
                />
              </div>
              <div className="card-setup text-setup py-4 md:py-10">
                <h5>Author: {story.username}</h5>
                <hr className="w-full" />
                <h6>Created: {new Date(story.createdAt).toDateString()}</h6>
                <h6>Last Update: {new Date(story.updatedAt).toDateString()}</h6>
              </div>
              <div className="card-setup text-setup py-4 md:py-10">
                <pre>
                  <p className="whitespace-pre-line">{story.desc}</p>
                </pre>
              </div>
              {user === story.username && (
                <>
                  <Link to="/singlepostupdate" state={story}>
                    <button className="py-3 px-6 bg-d text-white font-medium rounded hover:bg-a hover:text-d cursor-pointer ease-in-out duration-300">
                      Update Story
                    </button>
                  </Link>
                  <input
                    accept="image/jpg,image/png,image/jpeg"
                    className="hidden"
                    type="file"
                    onChange={handleInput}
                    multiple={false}
                    ref={fileRef}
                  />
                  {file && (
                    <div
                      className="flex flex-col hover:cursor-pointer gap-image text-center card-setup py-4 md:py-10 max-w-7xl"
                      onClick={() => {
                        setFile(null);
                        fileRef.current.value = null;
                      }}
                    >
                      <OrientedImage orientation={orientation} file={file} />
                      <h4>Don't want this image? Click me!</h4>
                    </div>
                  )}
                  {file ? (
                    <button
                      onClick={() => {
                        handleSubmit();
                      }}
                      className="py-3 px-6 bg-d text-white font-medium rounded hover:bg-a hover:text-d cursor-pointer ease-in-out duration-300"
                    >
                      Upload Image!
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        fileRef.current.click();
                      }}
                      className="py-3 px-6 bg-d text-white font-medium rounded hover:bg-a hover:text-d cursor-pointer ease-in-out duration-300"
                    >
                      Select File!
                    </button>
                  )}
                </>
              )}
            </>
          )}
          <div ref={myRef} />
          {story && (
            <>
              <Pagination
                currentPage={currentPage}
                totalCount={storyImages.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
              <ImageGrid
                currentGridData={currentGridData}
                address={address[2]}
              />
              <Pagination
                currentPage={currentPage}
                totalCount={storyImages.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </>
          )}
        </div>
      </main>
    </TransitionWrapper>
  );
}

export default SingleStory;
