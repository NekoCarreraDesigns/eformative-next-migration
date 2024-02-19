import React,{ useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "universal-cookie"
import styles from "./seller.module.css";

const Seller = () => {
  const [users, setUser] = useState({});
  const [sellingItems, setSellingItems] = useState([]);
  const [soldItems, setSoldItems] = useState([])
  let navigate = useRouter();
  
  function getCookie() {
    const cookies = new Cookies()
    const userCookie = cookies.get("users");
    console.log("retrieved cookie", userCookie)
    return userCookie ? userCookie : null;
}

  const postItemRedirect = () => {
    let postItemPath = `/post-item`;
    navigate.push(postItemPath);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("users");
    navigate.push("/sell");
    console.log("logged out");
  };

  useEffect(() => {
    Cookies.set("testCookie", "Hello, world!");
    const testCookie = Cookies.get("testCookie");
    console.log("Test Cookie:", testCookie);



    console.log("All Cookies", document.cookie);
    const userCookie = getCookie("users");
    console.log("userCookie:", userCookie);
    if (userCookie) {
      const users = JSON.parse(decodeURIComponent(userCookie));
      console.log("users", users);
      setUser(users);

    // Fetch items that the user is selling
      const fetchSellingItems = async () => {
        try {
          const response = await axios.get(`/market/items/selling`);
          setSellingItems(response.data);
        } catch (error) {
          console.error("Error fetching selling items data", error);
        }
      };

      // Fetch items that the user has sold
      const fetchSoldItems = async () => {
        try {
          const response = await axios.get(`/market/items/sold`);
          setSoldItems(response.data);
        } catch (error) {
          console.error("Error fetching sold items data", error);
        }
      };

      fetchSellingItems();
      fetchSoldItems();
    }
  }, []);

  return (
    <>
      <div className='hero-section'>
        <div>
          {users && (
            <h1 className='sellerPageHeader'>Welcome {users.fullName}!</h1>
          )}
        </div>
      <button className={`clear-btn-green-border ${styles.postItemButton}`} onClick={postItemRedirect} aria-label="button to sell items">
        Post an item to sell
      </button>
      <br/>
      <button className={`${styles.logoutButton} clear-btn-green-border`} aria-label="button to logout of site" onClick={handleLogout}>
        Logout
      </button>

      {sellingItems.length > 0 && (
          <div className={styles.itemsSellingDiv}>
            <h1 className={styles.itemsSellingHeader}>Items For Sale</h1>
            {sellingItems.map((item) => (
              <div key={item.id}>
                <img alt='sale-item' src={item.image} />
                <h3>{item.product}</h3>
                <h3>{item.price}</h3>
              </div>
            ))}
          </div>
        )}
      {soldItems.length > 0 && (
          <div className={styles.itemsSoldDiv}>
            <h1 className={styles.itemsSoldHeader}>Items Sold</h1>
            {soldItems.map((item) => (
              <div key={item.id}>
                <img alt='sale-item' src={item.image} />
                <h3>{item.product}</h3>
                <h3>{item.price}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Seller;
