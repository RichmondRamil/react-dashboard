import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Richmond</h1>
      </div>
      <List className="list">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <HomeOutlinedIcon className="icon-home " />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/" className="links">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CircleOutlinedIcon className="icon-circle" />
                </ListItemIcon>
                <ListItemText primary="CRM" />
              </ListItemButton>
            </Link>

            <Link to="/analytics" className="links">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CircleOutlinedIcon className="icon-circle" />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItemButton>
            </Link>

            <Link to="/ecommerce" className="links">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CircleOutlinedIcon className="icon-circle" />
                </ListItemIcon>
                <ListItemText primary="E-Commerce" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <p>APPS & PAGES</p>
        <Link to="/users" className="links">
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
        </Link>

        <Link to="/products" className="links">
          <ListItemButton>
            <ListItemIcon>
              <InventoryOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </Link>

        <Link to="/email" className="links">
          <ListItemButton>
            <ListItemIcon>
              <EmailOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItemButton>
        </Link>

        <Link to="/calendar" className="links">
          <ListItemButton>
            <ListItemIcon>
              <CalendarTodayOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </Link>

        <Link to="/kanban" className="links">
          <ListItemButton>
            <ListItemIcon>
              <ViewKanbanOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Kanban" />
          </ListItemButton>
        </Link>

        <p>OTHERS</p>
        <Link to="/chat" className="links">
          <ListItemButton>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
        </Link>

        <Link to="/notification" className="links">
          <ListItemButton>
            <ListItemIcon>
              <NotificationsNoneOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItemButton>
        </Link>

        <Link to="/editor" className="links">
          <ListItemButton>
            <ListItemIcon>
              <ModeEditOutlinedIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Editor" />
          </ListItemButton>
        </Link>

        <Link to="/settings" className="links">
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon className=" icon" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
