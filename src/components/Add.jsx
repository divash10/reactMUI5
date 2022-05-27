import {
  Avatar,
  Button,
  ButtonGroup,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import Fab from "@mui/material/Fab";
import React, { useState } from "react";
import { Box } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import styled from "@emotion/styled";
import MoodIcon from "@mui/icons-material/Mood";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 60,
          left: { xs: "calc(45%)", sm: 40 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={200}  p={3} borderRadius={5}>
          <Typography variant="h6" color="black" textAlign="center">
            Create a post
          </Typography>

          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/3.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Cindy
            </Typography>
          </UserBox>

          <TextField
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's on your mind?? "
            variant="standard"
            fullWidth
          />
          <Stack direction="row" mt={1}>
            <EmojiEmotionsIcon color="primary" />
            <EmojiObjectsIcon color="secondary" />
            <MoodIcon color="error" />
            <AddLocationIcon color="success" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <ImageIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
