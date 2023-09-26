import { useEffect, useRef, useState } from "react";
import { useUser } from "../../Providers/UserProvider";
import styles from "./NavBar.module.css";

import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { isUserLoggedIn, signOutContext } = useUser();
  const [showModal, setShowModal] = useState(false);

  const ref = useRef(null);

  const navigate = useNavigate();

  function singOuthandler() {
    signOutContext();
    navigate("/login");
  }

  useEffect(() => {
    function hideModal(event) {
      console.log(event);
      const clickedElement = event.target;

      const profileElement = ref.current;

      if (profileElement.contains(clickedElement)) {
        // it mean you click on the profile image
        return;
      } else {
        setShowModal(false);
      }
    }

    console.log(ref.current, "ref current ");

    // listen to the click  in doc
    // if  -> you click on this section then nothing unordanary will happen it will show you modal as per the logic ()
    // else ->

    // dont ever use DOM until its for the whole app and its really important...!!!!!

    // 10 lines
    document.addEventListener("click", hideModal);

    // CLEANUP

    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    <section ref={ref}>
      <div
        onClick={() => {
          setShowModal((old) => !old);
        }}
      >
        <ProfileIcon
          style={{
            background: "white",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      </div>

      {showModal && (
        <section className={styles["modal-sign-in"]}>
          {!isUserLoggedIn ? (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                SIGN IN
              </button>
              <p>hell world</p>
              <h1>Hwello !!!!^^ </h1>
            </>
          ) : (
            <button onClick={singOuthandler}>Sign out</button>
          )}
        </section>
      )}
    </section>
  );
}

export default Profile;
