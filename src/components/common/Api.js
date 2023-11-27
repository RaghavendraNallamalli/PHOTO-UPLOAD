import axios from "axios";
import { apiUrl, dataUrls } from "./Commondata";

export default class ApiCalls {
  static instance = null;
  static getInstance() {
    if (this.instance == null) {
      this.instance = new ApiCalls();
    }
    return this.instance;
  }
  //This code implements the Singleton pattern, ensuring that there is only one instance of the ApiCalls
   //class. The getInstance method returns the singleton instance, creating it if it doesn't exist.
  privateUserName = null;
  auth_code = null;
  //These variables are initialized with null
  getAuthToken() {
    if (this.auth_code != null) {
      return this.auth_code;
    }
    try {
      this.auth_code = sessionStorage.getItem("auth-code");
      return this.auth_code;
    } catch (err) {
      alert("Some error occured please login again");
    }
  }
  //The getAuthToken method retrieves the authentication token.
//If the token is already available, it returns it. Otherwise, it tries to fetch it from the session storage.

  getCommonData(name, content = "profile", page = 1) {
    //Method for making a GET request to retrieve common data for a given name, content, and page.
    return axios.get(apiUrl + `/users/${name}${dataUrls[content]}`, {
      params: {
        client_id: process.env.REACT_APP_ACCESS_NAME,
        page: page,"per_page": 10
      },
    });
  }


//Method for liking or unliking a photo using POST or DELETE requests, based on the liked parameter.
  likePhotos(photo_id, liked) {
    if (!liked) {
      return axios.post(
        apiUrl + `${dataUrls["photos"]}/${photo_id}/like`,
        {},
        {
          headers: {
            Authorization: this.getAuthToken(),
          },
          params: {
            client_id: process.env.REACT_APP_ACCESS_NAME,
          },
        }
      );
    } else {
      return axios.delete(apiUrl + `${dataUrls["photos"]}/${photo_id}/like`, {
        headers: {
          Authorization: this.getAuthToken(),
        },
        params: {
          client_id: process.env.REACT_APP_ACCESS_NAME,
        },
      });
    }
  }



  //Method for making a GET request to retrieve data for the home page.
  getHomePage() {
    return axios.get(apiUrl + dataUrls["photos"], {
      params: {
        client_id: process.env.REACT_APP_ACCESS_NAME,
      },
    });
  }




  //Method for fetching user profile data.
  getUserProfile() {
    return axios.get(apiUrl + "/me", {
      headers: {
        Authorization: this.getAuthToken(),
      },
    });
  }




  //Method for sending a PUT request to update the user profile with the provided data.
  updateUserProfile(data) {
    return axios.put(apiUrl + "/me", data, {
      headers: {
        Authorization: this.getAuthToken(),
      },
      params: {
        client_id: process.env.REACT_APP_ACCESS_NAME,
      },
    });
  }




  //Method for fetching data for a specific photo based on its ID.
  getPhoto(photo_id) {
    return axios.get(apiUrl + `${dataUrls["getPhotos"]}/${photo_id}`, {
      headers: {
        Authorization: sessionStorage.getItem("auth-code"),
      },
    });
  }



//Method for sending a PUT request to update the data for a specific photo.
  updatePhoto(photo_id, data) {
    axios.put(apiUrl + "/photos/" + photo_id, data, {
      headers: {
        Authorization: this.getAuthToken(),
      },
      params: {
        client_id: process.env.REACT_APP_ACCESS_NAME,
      },
    });
  }
}
