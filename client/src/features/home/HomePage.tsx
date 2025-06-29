import { Group } from "@mui/icons-material";
import {Box, Button, Container, Paper, Typography} from "@mui/material";
import { Link } from "react-router";

function HomePage() {
  return (
    <Paper
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, #182a73 0%, #218aae 50%, #20a7ac 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            position: "relative",
            zIndex: 1,
            animation: "fadeInUp 0.8s ease-out",
            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Logo and Brand Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 3, sm: 4 },
              mb: 6,
            }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Group sx={{ fontSize: { xs: 60, sm: 80, md: 100 }, color: "white" }} />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 700,
                  mb: 1,
                  backgroundColor: 'white',
                  
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Reactivities
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 4,
                  background: "linear-gradient(90deg, #20a7ac, #218aae)",
                  borderRadius: 2,
                  mx: { xs: "auto", sm: 0 },
                }}
              />
            </Box>
          </Box>

          {/* Welcome Section */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: 300,
                mb: 3,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Welcome to Reactivities
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 400,
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.8)",
                mb: 4,
              }}
            >
              Discover and join amazing activities in your community. Connect with like-minded people and make every
              moment count.
            </Typography>
          </Box>

          {/* CTA Button */}
          <Box>
            <Link to="/activities">
              <Button
                variant="contained"
                size="large"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  fontWeight: 600,
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  borderRadius: 3,
                  background: "linear-gradient(45deg, #20a7ac 30%, #218aae 90%)",
                  boxShadow: "0 8px 32px rgba(32, 167, 172, 0.4)",
                  textTransform: "none",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(32, 167, 172, 0.6)",
                    background: "linear-gradient(45deg, #1a8a8f 30%, #1b7a9e 90%)",
                  },
                }}
              >
                Take me to the activities
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Paper>
  )
}

export default HomePage