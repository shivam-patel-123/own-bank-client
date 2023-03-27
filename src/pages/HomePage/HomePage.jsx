import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Avatar } from "../../components";
import { logoutStart, updateProfilePictureStart } from "../../redux/user/user.reducer";
import { Link } from "../../styles/utils/Link.style.js";

const HomePage = () => {
    const dispatch = useDispatch();
    const account = useSelector((state) => state.user.account);

    return (
        <div>
            <form
                encType="multipart/form-data"
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const body = {};
                    console.log(formData);
                    body.accountNumber = account.accountNumber;
                    for (const [key, value] of formData) {
                        body[key] = value;
                    }
                    dispatch(updateProfilePictureStart(body));
                }}
            >
                <input type="file" accept="image/jpg, image/jpeg, image/png" name="profilePic" />
                <button type="submit">submit</button>
            </form>

            <Link to="/approve">Approve Account</Link>
        </div>
    );
};

export default HomePage;
