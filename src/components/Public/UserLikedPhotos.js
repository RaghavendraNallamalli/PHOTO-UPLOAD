import { useSearchParams } from "react-router-dom";
import ApiCalls from "../common/Api";
import { useEffect, useState } from "react";
import SidebarCommon from "../common/Sidebar";
import "./UserPhotos.css";
const PublicLikedPhotos = () => {
  const [params, setParams] = useSearchParams();
  const apiService = ApiCalls.getInstance();
  const [PublicLikedPhotos, setUserPhotos] = useState(null);
  useEffect(() => {
    apiService
      .getCommonData(params.get("user_name"), "likedPhotos", params.get("page"))
      .then((res) => {
        setUserPhotos(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [params, apiService]);

  const updatePage = (delta) => {
    let currentPage = parseInt(params.get("page"));
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("user_name", prevParams.get("user_name"));
      newParams.set("page", currentPage + delta);
      return newParams;
    });
  };
  
  const lastPage = () => {
    let currentPage = parseInt(params.get("page"));
    if (currentPage > 1) {
      updatePage(-1);
    }
  };
  
  const nextPage = () => {
    updatePage(1);
  };
  

  return (
    <div className="master-container">
      <div className="left-block">
        <SidebarCommon />
      </div>
      {PublicLikedPhotos == null || PublicLikedPhotos.length === 0 ? (
        <div className="right-block">No photos for this user</div>
      ) : (
        <div className="right-block">
          {PublicLikedPhotos.map((image) => {
            return (
              <div className="image-container" key={image.urls.regular}>
                <img src={image.urls.regular} className="cover-images" />
                <span>
                  {image.description}
                  <br /> Likes:{image.likes}
                </span>
              </div>
            );
          })}
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <span
                  class="page-link"
                  aria-label="Previous"
                  onClick={lastPage}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </span>
              </li>
              <li class="page-item">
                <span class="page-link">{params.get("page")}</span>
              </li>
              <li class="page-item">
                <span class="page-link" onClick={nextPage} aria-label="Next">
                  <span class="sr-only">Next</span>
                  <span aria-hidden="true">&raquo;</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default PublicLikedPhotos;
