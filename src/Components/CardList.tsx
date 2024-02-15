// import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Chip } from "@mui/material";
import { CardContent } from "@mui/material";
import { Card } from "@mui/material";

export default function CardList() {
    return (
        <Box
            sx={{
                borderRadius: "0.375rem",
                fontFamily: "sans-serif",
                backgroundColor: "rgb(8,8,8)",
                padding: "1rem",
                width: "100%",
                maxWidth: "700px",
                color: "rgb(171, 187, 194)",
                " @media(max-width:479px)": { padding: "3px 10px" },
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    color: "#f5f5f5",
                    " @media(max-width:991px)": { fontSize: "25px" },
                    " @media(max-width:479px)": { fontSize: "20px" },
                }}
            >
                Projects
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    width: "100%",
                    alignItems: "center",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gridGap: "20px",
                    marginTop: "20px",
                }}
            >
                <Card
                    sx={{
                        borderRadius: "1rem",
                        backgroundColor: "#182125",
                        border: "1px solid #182125",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            height: "164px",
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundImage:
                                "linear-gradient(90deg, #292348 0%, #1D3A48 94%)",
                        }}
                    >
                        <img
                            src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjA4IC00LjA4IDMyLjE2IDMyLjE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZT0iI2YxZWFlYSI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxwYXRoIGQ9Ik0yMS42Nzk5IDE2Ljk1OTlMMTguNTQ5OSA5LjY0OTg4QzE3LjQ4OTkgNy4xNjk4OCAxNS41Mzk5IDcuMDY5ODggMTQuMjI5OSA5LjQyOTg4TDEyLjMzOTkgMTIuODM5OUMxMS4zNzk5IDE0LjU2OTkgOS41ODk5MyAxNC43MTk5IDguMzQ5OTMgMTMuMTY5OUw4LjEyOTkzIDEyLjg4OTlDNi44Mzk5MyAxMS4yNjk5IDUuMDE5OTMgMTEuNDY5OSA0LjA4OTkzIDEzLjMxOTlMMi4zNjk5MyAxNi43Njk5QzEuMTU5OTMgMTkuMTY5OSAyLjkwOTkzIDIxLjk5OTkgNS41ODk5MyAyMS45OTk5SDE4LjM0OTlDMjAuOTQ5OSAyMS45OTk5IDIyLjY5OTkgMTkuMzQ5OSAyMS42Nzk5IDE2Ljk1OTlaIiBzdHJva2U9IiNmMWVhZWEiIHN0cm9rZS13aWR0aD0iMS44NzE5OTk5OTk5OTk5OTk5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4gPHBhdGggZD0iTTYuOTY5OTcgOEM4LjYyNjgyIDggOS45Njk5NyA2LjY1Njg1IDkuOTY5OTcgNUM5Ljk2OTk3IDMuMzQzMTUgOC42MjY4MiAyIDYuOTY5OTcgMkM1LjMxMzEyIDIgMy45Njk5NyAzLjM0MzE1IDMuOTY5OTcgNUMzLjk2OTk3IDYuNjU2ODUgNS4zMTMxMiA4IDYuOTY5OTcgOFoiIHN0cm9rZT0iI2YxZWFlYSIgc3Ryb2tlLXdpZHRoPSIxLjg3MTk5OTk5OTk5OTk5OTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPiA8L2c+Cg08L3N2Zz4="
                            style={{ opacity: "0.7" }}
                            width="60px"
                            height="60px"
                        />
                    </Box>
                    <CardContent
                        sx={{
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "10px",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: "#f5f5f5",
                                whiteSpace: "nowrap",
                                " @media(max-width:479px)": {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            My Project
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontStyle: "italic",
                                margin: "10px 0px",
                                " @media(max-width:991px)": {
                                    fontSize: "14px",
                                },
                                " @media(max-width:479px)": {
                                    fontSize: "13px",
                                },
                                "&&": { margin: "10px 0px" },
                            }}
                        >
                            No description
                        </Typography>
                        <Stack
                            sx={{
                                display: "flex",
                                marginTop: "25px",
                                alignItems: "center",
                            }}
                            spacing="10px"
                            direction="row"
                        >
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTg1LjEgNDY0YzEuOSAyOS45IDIxLjcgNDggNTIgNDhoMjM1LjZjMzQuNSAwIDUyLjctMTcuNyA1NC44LTUyIDUuNi05Mi40IDE5LjItMzE3LjcgMjAuMi0zMzYuMUg2NC45YzAgNCAxMy40IDIzMS45IDIwLjIgMzQwLjF6TTQ0Ny4zIDMyLjljLTI3LjEtLjItNTQuMS0uNC04MS4xLjEtMS42LTE4LjYtMTcuMi0zMy0zNS45LTMzSDE4MS43Yy0xOC43IDAtMzQuMyAxNC40LTM1LjggMzMtMjcuOC0uNS01NS43LS4zLTgzLjUtLjEtMTQuNi4yLTI1LjIgOC4zLTI4LjcgMjEuMS02LjEgMjIuMyA3LjQgNDAuNyAzMC41IDQwLjggNjQuMS4yIDEyOC4xLjEgMTkyLjEuMWgxOTAuOGMyMC43IDAgMzIuNi0xMS42IDMyLjctMzAuOXMtMTEuOS0zMS0zMi41LTMxLjF6IiBmaWxsPSIjYWFhYWFhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                width="18px"
                                height="18px"
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{ fontSize: "14px" }}
                            >
                                1 Bucket
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{ width: "100%", alignItems: "center" }}
                            spacing="10px"
                            direction="row"
                        >
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNNDM4LjA5IDI3My4zMmgtMzkuNTk2YzQuMDM2IDExLjA1IDYuMjQxIDIyLjk3NSA2LjI0MSAzNS40MDR2MTQ5LjY1YzAgNS4xODItLjkwMiAxMC4xNTYtMi41NDMgMTQuNzgyaDY1LjQ2MWMyNC40NTMgMCA0NC4zNDYtMTkuODk0IDQ0LjM0Ni00NC4zNDZ2LTgxLjU4MWMuMDAxLTQwLjc1My0zMy4xNTUtNzMuOTA5LTczLjkwOS03My45MDl6TTEwNy4yNjUgMzA4LjcyNWMwLTEyLjQzIDIuMjA1LTI0LjM1NCA2LjI0MS0zNS40MDRINzMuOTFjLTQwLjc1NCAwLTczLjkxIDMzLjE1Ni03My45MSA3My45MXY4MS41ODFjMCAyNC40NTIgMTkuODkzIDQ0LjM0NiA0NC4zNDYgNDQuMzQ2aDY1LjQ2MmE0NC4xNDQgNDQuMTQ0IDAgMCAxLTIuNTQzLTE0Ljc4M3YtMTQ5LjY1ek0zMDEuMjYxIDIzNC44MTVoLTkwLjUyMmMtNDAuNzU0IDAtNzMuOTEgMzMuMTU2LTczLjkxIDczLjkxdjE0OS42NWMwIDguMTYzIDYuNjE4IDE0Ljc4MiAxNC43ODIgMTQuNzgyaDIwOC43NzhjOC4xNjQgMCAxNC43ODItNi42MTggMTQuNzgyLTE0Ljc4MnYtMTQ5LjY1YzAtNDAuNzU0LTMzLjE1Ni03My45MS03My45MS03My45MXpNMjU2IDM4Ljg0Yy00OS4wMTIgMC04OC44ODYgMzkuODc0LTg4Ljg4NiA4OC44ODcgMCAzMy4yNDUgMTguMzQ5IDYyLjI4IDQ1LjQ0NyA3Ny41MjQgMTIuODUzIDcuMjMgMjcuNjcxIDExLjM2MiA0My40MzkgMTEuMzYyczMwLjU4Ni00LjEzMiA0My40MzktMTEuMzYyYzI3LjA5OS0xNS4yNDQgNDUuNDQ3LTQ0LjI4IDQ1LjQ0Ny03Ny41MjQgMC00OS4wMTItMzkuODc0LTg4Ljg4Ny04OC44ODYtODguODg3ek05OS45MTggMTIxLjY4OWMtMzYuNjU1IDAtNjYuNDc1IDI5LjgyLTY2LjQ3NSA2Ni40NzUgMCAzNi42NTUgMjkuODIgNjYuNDc1IDY2LjQ3NSA2Ni40NzVhNjYuMDk1IDY2LjA5NSAwIDAgMCAyNi4xOTUtNS4zODhjMTMuOTA2LTUuOTg3IDI1LjM3Mi0xNi41ODUgMzIuNDY3LTI5Ljg2YTY2LjA1IDY2LjA1IDAgMCAwIDcuODEzLTMxLjIyN2MwLTM2LjY1NC0yOS44Mi02Ni40NzUtNjYuNDc1LTY2LjQ3NXpNNDEyLjA4MiAxMjEuNjg5Yy0zNi42NTUgMC02Ni40NzUgMjkuODItNjYuNDc1IDY2LjQ3NWE2Ni4wNDUgNjYuMDQ1IDAgMCAwIDcuODEzIDMxLjIyN2M3LjA5NSAxMy4yNzYgMTguNTYxIDIzLjg3NCAzMi40NjcgMjkuODZhNjYuMDk1IDY2LjA5NSAwIDAgMCAyNi4xOTUgNS4zODhjMzYuNjU1IDAgNjYuNDc1LTI5LjgyIDY2LjQ3NS02Ni40NzUgMC0zNi42NTUtMjkuODItNjYuNDc1LTY2LjQ3NS02Ni40NzV6IiBmaWxsPSIjYWFhYWFhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                width="18px"
                                height="18px"
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{ fontSize: "14px" }}
                            >
                                1 Member
                            </Typography>
                            <Chip
                                sx={{
                                    borderRadius: "1rem",
                                    backgroundColor: "transparent",
                                    border: "1px solid rgb(105, 121, 128)",
                                    color: "rgb(135, 148, 153)",
                                    fontSize: "13px",
                                    padding: "1px 15px",
                                    marginLeft: "auto",
                                }}
                                label={<>Free</>}
                            />
                        </Stack>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        borderRadius: "1rem",
                        backgroundColor: "#182125",
                        border: "1px solid #182125",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            height: "164px",
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundImage:
                                "linear-gradient(90deg, #292348 0%, #1D3A48 94%)",
                        }}
                    >
                        <img
                            src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjA4IC00LjA4IDMyLjE2IDMyLjE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZT0iI2YxZWFlYSI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxwYXRoIGQ9Ik0yMS42Nzk5IDE2Ljk1OTlMMTguNTQ5OSA5LjY0OTg4QzE3LjQ4OTkgNy4xNjk4OCAxNS41Mzk5IDcuMDY5ODggMTQuMjI5OSA5LjQyOTg4TDEyLjMzOTkgMTIuODM5OUMxMS4zNzk5IDE0LjU2OTkgOS41ODk5MyAxNC43MTk5IDguMzQ5OTMgMTMuMTY5OUw4LjEyOTkzIDEyLjg4OTlDNi44Mzk5MyAxMS4yNjk5IDUuMDE5OTMgMTEuNDY5OSA0LjA4OTkzIDEzLjMxOTlMMi4zNjk5MyAxNi43Njk5QzEuMTU5OTMgMTkuMTY5OSAyLjkwOTkzIDIxLjk5OTkgNS41ODk5MyAyMS45OTk5SDE4LjM0OTlDMjAuOTQ5OSAyMS45OTk5IDIyLjY5OTkgMTkuMzQ5OSAyMS42Nzk5IDE2Ljk1OTlaIiBzdHJva2U9IiNmMWVhZWEiIHN0cm9rZS13aWR0aD0iMS44NzE5OTk5OTk5OTk5OTk5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4gPHBhdGggZD0iTTYuOTY5OTcgOEM4LjYyNjgyIDggOS45Njk5NyA2LjY1Njg1IDkuOTY5OTcgNUM5Ljk2OTk3IDMuMzQzMTUgOC42MjY4MiAyIDYuOTY5OTcgMkM1LjMxMzEyIDIgMy45Njk5NyAzLjM0MzE1IDMuOTY5OTcgNUMzLjk2OTk3IDYuNjU2ODUgNS4zMTMxMiA4IDYuOTY5OTcgOFoiIHN0cm9rZT0iI2YxZWFlYSIgc3Ryb2tlLXdpZHRoPSIxLjg3MTk5OTk5OTk5OTk5OTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPiA8L2c+Cg08L3N2Zz4="
                            style={{ opacity: "0.7" }}
                            width="60px"
                            height="60px"
                        />
                    </Box>
                    <CardContent
                        sx={{
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "10px",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: "#f5f5f5",
                                whiteSpace: "nowrap",
                                " @media(max-width:479px)": {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            My Project1
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontStyle: "italic",
                                margin: "10px 0px",
                                " @media(max-width:991px)": {
                                    fontSize: "14px",
                                },
                                " @media(max-width:479px)": {
                                    fontSize: "13px",
                                },
                                "&&": { margin: "10px 0px" },
                            }}
                        >
                            No description
                        </Typography>
                        <Stack
                            sx={{
                                display: "flex",
                                marginTop: "25px",
                                alignItems: "center",
                            }}
                            spacing="10px"
                            direction="row"
                        >
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTg1LjEgNDY0YzEuOSAyOS45IDIxLjcgNDggNTIgNDhoMjM1LjZjMzQuNSAwIDUyLjctMTcuNyA1NC44LTUyIDUuNi05Mi40IDE5LjItMzE3LjcgMjAuMi0zMzYuMUg2NC45YzAgNCAxMy40IDIzMS45IDIwLjIgMzQwLjF6TTQ0Ny4zIDMyLjljLTI3LjEtLjItNTQuMS0uNC04MS4xLjEtMS42LTE4LjYtMTcuMi0zMy0zNS45LTMzSDE4MS43Yy0xOC43IDAtMzQuMyAxNC40LTM1LjggMzMtMjcuOC0uNS01NS43LS4zLTgzLjUtLjEtMTQuNi4yLTI1LjIgOC4zLTI4LjcgMjEuMS02LjEgMjIuMyA3LjQgNDAuNyAzMC41IDQwLjggNjQuMS4yIDEyOC4xLjEgMTkyLjEuMWgxOTAuOGMyMC43IDAgMzIuNi0xMS42IDMyLjctMzAuOXMtMTEuOS0zMS0zMi41LTMxLjF6IiBmaWxsPSIjYWFhYWFhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                width="18px"
                                height="18px"
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{ fontSize: "14px" }}
                            >
                                1 Bucket
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{ width: "100%", alignItems: "center" }}
                            spacing="10px"
                            direction="row"
                        >
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNNDM4LjA5IDI3My4zMmgtMzkuNTk2YzQuMDM2IDExLjA1IDYuMjQxIDIyLjk3NSA2LjI0MSAzNS40MDR2MTQ5LjY1YzAgNS4xODItLjkwMiAxMC4xNTYtMi41NDMgMTQuNzgyaDY1LjQ2MWMyNC40NTMgMCA0NC4zNDYtMTkuODk0IDQ0LjM0Ni00NC4zNDZ2LTgxLjU4MWMuMDAxLTQwLjc1My0zMy4xNTUtNzMuOTA5LTczLjkwOS03My45MDl6TTEwNy4yNjUgMzA4LjcyNWMwLTEyLjQzIDIuMjA1LTI0LjM1NCA2LjI0MS0zNS40MDRINzMuOTFjLTQwLjc1NCAwLTczLjkxIDMzLjE1Ni03My45MSA3My45MXY4MS41ODFjMCAyNC40NTIgMTkuODkzIDQ0LjM0NiA0NC4zNDYgNDQuMzQ2aDY1LjQ2MmE0NC4xNDQgNDQuMTQ0IDAgMCAxLTIuNTQzLTE0Ljc4M3YtMTQ5LjY1ek0zMDEuMjYxIDIzNC44MTVoLTkwLjUyMmMtNDAuNzU0IDAtNzMuOTEgMzMuMTU2LTczLjkxIDczLjkxdjE0OS42NWMwIDguMTYzIDYuNjE4IDE0Ljc4MiAxNC43ODIgMTQuNzgyaDIwOC43NzhjOC4xNjQgMCAxNC43ODItNi42MTggMTQuNzgyLTE0Ljc4MnYtMTQ5LjY1YzAtNDAuNzU0LTMzLjE1Ni03My45MS03My45MS03My45MXpNMjU2IDM4Ljg0Yy00OS4wMTIgMC04OC44ODYgMzkuODc0LTg4Ljg4NiA4OC44ODcgMCAzMy4yNDUgMTguMzQ5IDYyLjI4IDQ1LjQ0NyA3Ny41MjQgMTIuODUzIDcuMjMgMjcuNjcxIDExLjM2MiA0My40MzkgMTEuMzYyczMwLjU4Ni00LjEzMiA0My40MzktMTEuMzYyYzI3LjA5OS0xNS4yNDQgNDUuNDQ3LTQ0LjI4IDQ1LjQ0Ny03Ny41MjQgMC00OS4wMTItMzkuODc0LTg4Ljg4Ny04OC44ODYtODguODg3ek05OS45MTggMTIxLjY4OWMtMzYuNjU1IDAtNjYuNDc1IDI5LjgyLTY2LjQ3NSA2Ni40NzUgMCAzNi42NTUgMjkuODIgNjYuNDc1IDY2LjQ3NSA2Ni40NzVhNjYuMDk1IDY2LjA5NSAwIDAgMCAyNi4xOTUtNS4zODhjMTMuOTA2LTUuOTg3IDI1LjM3Mi0xNi41ODUgMzIuNDY3LTI5Ljg2YTY2LjA1IDY2LjA1IDAgMCAwIDcuODEzLTMxLjIyN2MwLTM2LjY1NC0yOS44Mi02Ni40NzUtNjYuNDc1LTY2LjQ3NXpNNDEyLjA4MiAxMjEuNjg5Yy0zNi42NTUgMC02Ni40NzUgMjkuODItNjYuNDc1IDY2LjQ3NWE2Ni4wNDUgNjYuMDQ1IDAgMCAwIDcuODEzIDMxLjIyN2M3LjA5NSAxMy4yNzYgMTguNTYxIDIzLjg3NCAzMi40NjcgMjkuODZhNjYuMDk1IDY2LjA5NSAwIDAgMCAyNi4xOTUgNS4zODhjMzYuNjU1IDAgNjYuNDc1LTI5LjgyIDY2LjQ3NS02Ni40NzUgMC0zNi42NTUtMjkuODItNjYuNDc1LTY2LjQ3NS02Ni40NzV6IiBmaWxsPSIjYWFhYWFhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                width="18px"
                                height="18px"
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{ fontSize: "14px" }}
                            >
                                1 Member
                            </Typography>
                            <Chip
                                sx={{
                                    borderRadius: "1rem",
                                    backgroundColor: "transparent",
                                    border: "1px solid rgb(105, 121, 128)",
                                    color: "rgb(135, 148, 153)",
                                    fontSize: "13px",
                                    padding: "1px 15px",
                                    marginLeft: "auto",
                                }}
                                label={<>Free</>}
                            />
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
