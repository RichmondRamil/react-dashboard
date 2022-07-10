import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <label htmlFor="search">Search</label>
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="lists">
        <div className="list">
          <TranslateIcon className="icon" />
        </div>
        <div className="list">
          <NotificationsNoneIcon className="icon" />
        </div>
        <div className="list">
          <Brightness5Icon className="icon" />
        </div>
        <div className="list">
          <img
            src="https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/278306535_3145133529065430_2554693423705938124_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8oyyhg6CACTUfCscuRBx9wxVeQE-NIRvDFV5AT40hG5yE3hiVLyZxL51b1sFeTbLTl2ty4lfzNdnwW1X-4xih&_nc_ohc=gJGao15TkvwAX8XqauL&_nc_ht=scontent.fcrk2-1.fna&oh=00_AT_soELHRNI_xNlyt9CFyVU-ZVsqBq1jPMBdBmXtttICRg&oe=62BC8C66"
            alt=""
          />
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
