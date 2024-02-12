import React, { useEffect } from "react";
import InputBox from "../../components/InputBox/InputBox.component";
import googleIcon from "./google.png";
import illus from "./illus.png";
import { Link, useNavigate } from "react-router-dom";
import AnimationWrapper from "./page-animation";
import { useAuth } from "../../context/AuthContext";
import { useRef, useState, useContext, createContext } from "react";
import { auth, provider, storage } from "../../context/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../context/Firebase";
import Select from "react-select";
import college from "./icon/college.png";
import gender from "./icon/gender.png";
import hat from "./icon/hat.png";
import lock from "./icon/lock.png";
import phone from "./icon/phone.png";
import msg from "./icon/msg.png";
import nationality from "./icon/nationality.png";
import year from "./icon/year.png";
import person from "./icon/person.png";
import { useFormContext } from "./FormContext";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";


export const EditProfile = () => {
  const options = [
    { value: "School Student", label: "School Student" },
    { value: "College Student", label: "College Student" },
    { value: "Working", label: "Working" },
    { value: "other", label: "Other" },
  ];
  const fullnameRef = useRef();
  const occupationRef = useRef()
  const courseRef = useRef();
  const yearRef = useRef();
  const collegeRef = useRef();
  const mobileNumberRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = userDetails.imgUrl || null
      if (profileImage) {
        imageUrl = await uploadImage();
      }
      const formdata = {
        email: auth.currentUser.email,
        newData: {
          imgUrl: imageUrl,
          name: fullnameRef.current?.value || userDetails.name,
          course: courseRef.current?.value || userDetails.course,
          year: yearRef.current?.value || userDetails.year,
          mobile: mobileNumberRef.current?.value || userDetails.mobile,
          college: collegeRef.current?.value || userDetails.college,
        },
      };
      const url = process.env.REACT_APP_BASE_URL;
      const response = await fetch(`${url}/auth/updateuser`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      if (response.ok) {
        navigate("/profile");
      }
    } catch (error) {
      setError("Failed to update");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const [profileImage, setProfileImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };
  const uploadImage = async () => {
    // Ensure that eventImage is not null before attempting to upload
    if (!profileImage) {
      throw new Error("No image selected");
    }

    // Upload the image to Firebase Storage
    const storageRef = ref(storage, `User/${profileImage.name}`);
    await uploadBytes(storageRef, profileImage);

    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    return imageUrl;
  };


  const [selectedOption, setSelectedOption] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const fetchUserData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const response = await fetch(`${url}/auth/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: auth.currentUser.email }),
      });
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    if (auth.currentUser) {
      fetchUserData();
    }
  }, [auth.currentUser]);
  return (
    <div className="">
      <AnimationWrapper >
        <section className="hidden h-[70%] sm:flex flex-col justify-start items-center mx-auto my-[50px] w-[80%] border rounded-[10px]">
          <div className="flex flex-row justify-center items-center w-[40%] ">
            <p className="my-[20px]"> Edit Profile</p>
          </div>
          <div className="flex flex-row w-[100%]">
            <form
              className="w-[100%]  sm:w-[50%]  p-8 rounded-[20px] flex-col  "
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <InputBox
                name="fullname"
                type="text"
                placeholder={`Full Name: ${userDetails.name}`}
                icon={person}
                ref={fullnameRef}
              />
              <InputBox
                name="mobile number"
                type="text"
                placeholder={`mobile no: ${userDetails.mobile}`}
                icon={phone}
                ref={mobileNumberRef}
              />
              <div className="mb-3">
                <label className="form-label">Change profile Image:</label>
                <input type="file" className="form-control" onChange={handleImageUpload} />
              </div>

              <div className="my-4">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  ref={occupationRef}
                  className=""
                />
              </div>

              {selectedOption && selectedOption.value == "College Student" ? (
                <InputBox
                  name="college"
                  type="text"
                  placeholder={`college: ${userDetails.college}`}
                  icon={college}
                  ref={collegeRef}
                />
              ) : (
                ""
              )}

              {selectedOption && selectedOption.value == "College Student" ? (
                <InputBox
                  name="course"
                  type="text"
                  placeholder={`course: ${userDetails.course}`}
                  icon={hat}
                  ref={courseRef}
                />
              ) : (
                ""
              )}

              {selectedOption && selectedOption.value == "College Student" ? (
                <InputBox
                  name="year"
                  type="text"
                  placeholder={`year: ${userDetails.year}`}
                  icon={year}
                  ref={yearRef}
                />
              ) : (
                ""
              )}
              <button
                disabled={loading}
                className="whitespace-nowrap bg-blue text-white rounded-[5px] w-[100%] font-normal text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14 py-2"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="hidden sm:flex flex-col justify-center items-center w-[50%]">
              <img src={illus} className="h-[250px]"></img>
            </div>
          </div>
        </section>
        <section className="sm:hidden h-[70%] flex flex-col justify-start items-center mx-auto my-[50px] w-[80%] border rounded-[10px]">
          <div className="flex flex-row justify-center items-center w-[40%] ">

            <p className="my-[20px] text-[8px] sm:text-[15px]">  Fill the form to proceed further.</p>
          </div>
          <div className="flex flex-col w-[100%]">
            <div className="flex flex-col justify-center items-center w-[100%] my-[30px]">

              <img src={illus} />
            </div>
            <form
              className="w-[100%]  sm:w-[50%]  p-8 rounded-[20px] flex-col  "
              onSubmit={(e) => (handleFormSubmit(e))}
            >
              <InputBox
                name="fullname"
                type="text"
                placeholder={`Full Name: ${userDetails.name}`}
                icon={person}
                ref={fullnameRef}
              />

              <InputBox
                name="mobile number"
                type="text"
                placeholder={`mobile no: ${userDetails.mobile}`}
                icon={phone}
                ref={mobileNumberRef}
              />

              <div className="mb-3">
                <label className="form-label">Change profile Image:</label>
                <input type="file" className="form-control" onChange={handleImageUpload} />
              </div>

              <div className="my-4">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  ref={occupationRef}
                  className=""
                />
              </div>

              {selectedOption && selectedOption.value == "College Student" ? (
                <InputBox
                  name="college"
                  type="text"
                  placeholder={`college: ${userDetails.college}`}
                  icon={college}
                  ref={collegeRef}
                />
              ) : (
                ""
              )}

              {selectedOption && selectedOption.value == "College Student" ? (
                <InputBox
                  name="course"
                  type="text"
                  placeholder={`course: ${userDetails.course}`}
                  icon={hat}
                  ref={courseRef}
                />
              ) : (
                ""
              )}

              {selectedOption && selectedOption.value == "College Student" ? (
                <InputBox
                  name="year"
                  type="text"
                  placeholder={`year: ${userDetails.year}`}
                  icon={year}
                  ref={yearRef}
                />
              ) : (
                ""
              )}

              <button
                disabled={loading}
                className="whitespace-nowrap bg-blue text-white rounded-[5px] w-[100%] font-normal text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14 py-2"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="sm:hidden flex flex-row justify-center items-center w-[100%]">
            </div>
          </div>
        </section>
      </AnimationWrapper>
    </div>
  );
};
