import React from "react";
import PropTypes from "prop-types";
import FaceIcon from '@mui/icons-material/Face';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function ContactListItem({ name, number, onDelete, id }) {

  
  return (
    <>
      <ListItem sx={{width: "400px"}}>
        <ListItemAvatar>
          <Avatar>
            <FaceIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />

        <IconButton
          color="primary"
          onClick={() => onDelete(id)}>
          <DeleteForeverIcon sx={{ fontSize: 30 }} />
        </IconButton>

      </ListItem>
   
      </>
  );
}

ContactListItem.propTypes = {
 name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;