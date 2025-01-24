import Box from "@mui/material/Box";

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trello.broadBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      Broad Bar
    </Box>
  );
}

export default BoardBar;
