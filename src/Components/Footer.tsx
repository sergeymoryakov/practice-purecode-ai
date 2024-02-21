import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Stack } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "rgb(8,8,8)",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                rowGap: "30px",
                // width: "100%",
                // maxWidth: "1300px",
                " @media(max-width:991px)": { padding: "30px 25px" },
                " @media(max-width:479px)": { padding: "25px 15px" },
                border: "1px solid white",
                borderRadius: "1rem",
            }}
        >
            <Box
                sx={{
                    fontFamily: "Roboto, system-ui",
                    display: "grid",
                    width: "100%",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    " @media(max-width:479px)": {
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "20px",
                    },
                }}
            >
                <Box>
                    <img
                        src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/0a7b5340-f7f3-4b28-968d-f884756d2d1d-Frame 3.png"
                        height="50px"
                        width="50px"
                    />
                </Box>
                <Box sx={{ textAlign: "start" }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "500",
                            color: "rgb(255, 255, 255)",
                        }}
                    >
                        PRODUCT
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Product
                            </Link>
                        </ListItem>
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Product
                            </Link>
                        </ListItem>
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Product
                            </Link>
                        </ListItem>
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Product
                            </Link>
                        </ListItem>
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Product
                            </Link>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ textAlign: "start" }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "500",
                            color: "rgb(255, 255, 255)",
                        }}
                    >
                        COMPANY
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                About
                            </Link>
                        </ListItem>{" "}
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Careers
                            </Link>
                        </ListItem>{" "}
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Privacy
                            </Link>
                        </ListItem>{" "}
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Security
                            </Link>
                        </ListItem>{" "}
                        <ListItem sx={{ display: "block" }}>
                            <Link
                                sx={{
                                    textDecoration: "none",
                                    color: "rgb(255, 255, 255)",
                                    fontWeight: "300",
                                }}
                            >
                                Press kit
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Stack
                sx={{
                    columnGap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                spacing="0px"
                direction="row"
            >
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNiAzYy0uNi4zLTEuMi40LTEuOS41LjctLjQgMS4yLTEgMS40LTEuOC0uNi40LTEuMy42LTIuMS44LS42LS42LTEuNS0xLTIuNC0xLTEuNyAwLTMuMiAxLjUtMy4yIDMuMyAwIC4zIDAgLjUuMS43LTIuNy0uMS01LjItMS40LTYuOC0zLjQtLjMuNS0uNCAxLS40IDEuNyAwIDEuMS42IDIuMSAxLjUgMi43LS41IDAtMS0uMi0xLjUtLjRDLjcgNy43IDEuOCA5IDMuMyA5LjNjLS4zLjEtLjYuMS0uOS4xLS4yIDAtLjQgMC0uNi0uMS40IDEuMyAxLjYgMi4zIDMuMSAyLjMtMS4xLjktMi41IDEuNC00LjEgMS40SDBjMS41LjkgMy4yIDEuNSA1IDEuNSA2IDAgOS4zLTUgOS4zLTkuM3YtLjRDMTUgNC4zIDE1LjYgMy43IDE2IDN6IiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjNDQ0NDQ0IiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    style={
                        {
                            // " @media(max-width:991px)": {
                            //     height: "22px",
                            //     width: "22px",
                            // },
                            // " @media(max-width:479px)": {
                            //     height: "18px",
                            //     width: "18px",
                            // },
                        }
                    }
                    width="25px"
                    height="25px"
                />
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTc2IDE3NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48cmVjdCB3aWR0aD0iMTc2IiBoZWlnaHQ9IjE3NiIgZmlsbD0iI2ZmZmZmZiIgcng9IjI0IiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDA3N2I1IiBjbGFzcz0iIj48L3JlY3Q+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYzLjQgNDhhMTUgMTUgMCAxIDEtMTUtMTUgMTUgMTUgMCAwIDEgMTUgMTV6TTYwIDczdjY2LjI3YTMuNzEgMy43MSAwIDAgMS0zLjcxIDMuNzNINDAuNDhhMy43MSAzLjcxIDAgMCAxLTMuNzItMy43MlY3M2EzLjcyIDMuNzIgMCAwIDEgMy43Mi0zLjcyaDE1LjgxQTMuNzIgMy43MiAwIDAgMSA2MCA3M3pNMTQyLjY0IDEwNy41djMyLjA4YTMuNDEgMy40MSAwIDAgMS0zLjQyIDMuNDJoLTE3YTMuNDEgMy40MSAwIDAgMS0zLjQyLTMuNDJ2LTMxLjA5YzAtNC42NCAxLjM2LTIwLjMyLTEyLjEzLTIwLjMyLTEwLjQ1IDAtMTIuNTggMTAuNzMtMTMgMTUuNTV2MzUuODZBMy40MiAzLjQyIDAgMCAxIDkwLjMgMTQzSDczLjg4YTMuNDEgMy40MSAwIDAgMS0zLjQxLTMuNDJWNzIuNzFhMy40MSAzLjQxIDAgMCAxIDMuNDEtMy40Mkg5MC4zYTMuNDIgMy40MiAwIDAgMSAzLjQyIDMuNDJ2NS43OGMzLjg4LTUuODIgOS42My0xMC4zMSAyMS45LTEwLjMxIDI3LjE4IDAgMjcuMDIgMjUuMzggMjcuMDIgMzkuMzJ6IiBmaWxsPSIjMGUwMTAxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"
                    style={
                        {
                            // " @media(max-width:991px)": {
                            //     height: "22px",
                            //     width: "22px",
                            // },
                            // " @media(max-width:479px)": {
                            //     height: "18px",
                            //     width: "18px",
                            // },
                        }
                    }
                    width="25px"
                    height="25px"
                />
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExIDUxMS45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNNTEwLjk1IDE1MC41Yy0xLjItMjcuMi01LjU5OC00NS44OTgtMTEuOS02Mi4xMDItNi41LTE3LjE5OS0xNi41LTMyLjU5Ny0yOS42LTQ1LjM5OC0xMi44MDItMTMtMjguMzAyLTIzLjEwMi00NS4zMDItMjkuNS0xNi4yOTYtNi4zLTM0Ljg5OC0xMC43LTYyLjA5Ny0xMS44OThDMzM0LjY0OC4zIDMyNS45NDkgMCAyNTYuNDQ5IDBzLTc4LjE5OS4zLTEwNS41IDEuNWMtMjcuMTk5IDEuMi00NS44OTggNS42MDItNjIuMDk3IDExLjg5OC0xNy4yMDQgNi41LTMyLjYwMiAxNi41LTQ1LjQwMyAyOS42MDItMTMgMTIuOC0yMy4wOTcgMjguMy0yOS41IDQ1LjMtNi4zIDE2LjMwMi0xMC42OTkgMzQuOS0xMS44OTggNjIuMDk4Qy43NSAxNzcuODAxLjQ0OSAxODYuNS40NDkgMjU2cy4zMDEgNzguMiAxLjUgMTA1LjVjMS4yIDI3LjIgNS42MDIgNDUuODk4IDExLjkwMyA2Mi4xMDIgNi41IDE3LjE5OSAxNi41OTcgMzIuNTk3IDI5LjU5NyA0NS4zOTggMTIuODAxIDEzIDI4LjMwMSAyMy4xMDIgNDUuMzAxIDI5LjUgMTYuMyA2LjMgMzQuODk4IDEwLjcgNjIuMTAyIDExLjg5OCAyNy4yOTYgMS4yMDQgMzYgMS41IDEwNS41IDEuNXM3OC4xOTktLjI5NiAxMDUuNS0xLjVjMjcuMTk5LTEuMTk5IDQ1Ljg5OC01LjU5NyA2Mi4wOTctMTEuODk4YTEzMC45MzQgMTMwLjkzNCAwIDAgMCA3NC45MDMtNzQuODk4YzYuMjk2LTE2LjMwMSAxMC42OTktMzQuOTAzIDExLjg5OC02Mi4xMDIgMS4yLTI3LjMgMS41LTM2IDEuNS0xMDUuNXMtLjEwMi03OC4yLTEuMy0xMDUuNXptLTQ2LjA5OCAyMDljLTEuMTAyIDI1LTUuMzAxIDM4LjUtOC44MDEgNDcuNS04LjYwMiAyMi4zLTI2LjMwMSA0MC00OC42MDIgNDguNjAyLTkgMy41LTIyLjU5NyA3LjY5OS00Ny41IDguNzk2LTI3IDEuMjA0LTM1LjA5NyAxLjUtMTAzLjM5OCAxLjVzLTc2LjUtLjI5Ni0xMDMuNDAzLTEuNWMtMjUtMS4wOTctMzguNS01LjI5Ni00Ny41LTguNzk2Qzk0LjU1MSA0NTEuNSA4NC40NSA0NDUgNzYuMjUgNDM2LjVjLTguNS04LjMtMTUtMTguMy0xOS4xMDItMjkuMzk4LTMuNS05LTcuNjk5LTIyLjYwMi04Ljc5Ni00Ny41LTEuMjA0LTI3LTEuNS0zNS4xMDItMS41LTEwMy40MDNzLjI5Ni03Ni41IDEuNS0xMDMuMzk4YzEuMDk3LTI1IDUuMjk2LTM4LjUgOC43OTYtNDcuNUM2MS4yNSA5NC4xOTkgNjcuNzUgODQuMSA3Ni4zNTIgNzUuODk4YzguMjk2LTguNSAxOC4yOTYtMTUgMjkuMzk4LTE5LjA5NyA5LTMuNSAyMi42MDItNy43IDQ3LjUtOC44MDEgMjctMS4yIDM1LjEwMi0xLjUgMTAzLjM5OC0xLjUgNjguNDAzIDAgNzYuNS4zIDEwMy40MDMgMS41IDI1IDEuMTAyIDM4LjUgNS4zIDQ3LjUgOC44IDExLjA5NyA0LjA5OCAyMS4xOTkgMTAuNTk4IDI5LjM5OCAxOS4wOTggOC41IDguMzAxIDE1IDE4LjMwMSAxOS4xMDIgMjkuNDAzIDMuNSA5IDcuNjk5IDIyLjU5NyA4LjggNDcuNSAxLjIgMjcgMS41IDM1LjA5NyAxLjUgMTAzLjM5OHMtLjMgNzYuMzAxLTEuNSAxMDMuMzAxem0wIDAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMjU2LjQ1IDEyNC41Yy03Mi41OTggMC0xMzEuNSA1OC44OTgtMTMxLjUgMTMxLjVzNTguOTAyIDEzMS41IDEzMS41IDEzMS41YzcyLjYgMCAxMzEuNS01OC44OTggMTMxLjUtMTMxLjVzLTU4LjktMTMxLjUtMTMxLjUtMTMxLjV6bTAgMjE2LjhjLTQ3LjA5OCAwLTg1LjMwMi0zOC4xOTgtODUuMzAyLTg1LjNzMzguMjA0LTg1LjMgODUuMzAxLTg1LjNjNDcuMTAyIDAgODUuMzAxIDM4LjE5OCA4NS4zMDEgODUuM3MtMzguMiA4NS4zLTg1LjMgODUuM3pNNDIzLjg1MiAxMTkuM2MwIDE2Ljk1NC0xMy43NDcgMzAuNy0zMC43MDQgMzAuNy0xNi45NTMgMC0zMC42OTktMTMuNzQ2LTMwLjY5OS0zMC43IDAtMTYuOTU2IDEzLjc0Ni0zMC42OTggMzAuNy0zMC42OTggMTYuOTU2IDAgMzAuNzAzIDEzLjc0MiAzMC43MDMgMzAuNjk5em0wIDAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                    style={
                        {
                            // " @media(max-width:991px)": {
                            //     height: "22px",
                            //     width: "22px",
                            // },
                            // " @media(max-width:479px)": {
                            //     height: "18px",
                            //     width: "18px",
                            // },
                        }
                    }
                    width="25px"
                    height="25px"
                />
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzEwIDMxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTI5Ny45MTcgNjQuNjQ1Yy0xMS4xOS0xMy4zMDItMzEuODUtMTguNzI4LTcxLjMwNi0xOC43MjhIODMuMzg2Yy00MC4zNTkgMC02MS4zNjkgNS43NzYtNzIuNTE3IDE5LjkzOEMwIDc5LjY2MyAwIDEwMC4wMDggMCAxMjguMTY2djUzLjY2OWMwIDU0LjU1MSAxMi44OTYgODIuMjQ4IDgzLjM4NiA4Mi4yNDhoMTQzLjIyNmMzNC4yMTYgMCA1My4xNzYtNC43ODggNjUuNDQyLTE2LjUyN0MzMDQuNjMzIDIzNS41MTggMzEwIDIxNS44NjMgMzEwIDE4MS44MzV2LTUzLjY2OWMwLTI5LjY5NS0uODQxLTUwLjE2LTEyLjA4My02My41MjF6bS05OC44OTYgOTcuNzY1LTY1LjAzOCAzMy45OTFhOS45OTcgOS45OTcgMCAwIDEtMTQuNjMyLTguODYzdi02Ny43NjRhMTAgMTAgMCAwIDEgMTQuNjA5LTguODc0bDY1LjAzOCAzMy43NzJhMTAgMTAgMCAwIDEgLjAyMyAxNy43Mzh6IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    style={
                        {
                            // " @media(max-width:991px)": {
                            //     height: "22px",
                            //     width: "22px",
                            // },
                            // " @media(max-width:479px)": {
                            //     height: "18px",
                            //     width: "18px",
                            // },
                        }
                    }
                    width="25px"
                    height="25px"
                />
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQ0OCAwSDY0QzI4LjcwNCAwIDAgMjguNzA0IDAgNjR2Mzg0YzAgMzUuMjk2IDI4LjcwNCA2NCA2NCA2NGgxOTJWMzM2aC02NHYtODBoNjR2LTY0YzAtNTMuMDI0IDQyLjk3Ni05NiA5Ni05Nmg2NHY4MGgtMzJjLTE3LjY2NCAwLTMyLTEuNjY0LTMyIDE2djY0aDgwbC0zMiA4MGgtNDh2MTc2aDk2YzM1LjI5NiAwIDY0LTI4LjcwNCA2NC02NFY2NGMwLTM1LjI5Ni0yOC43MDQtNjQtNjQtNjR6IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    style={
                        {
                            // " @media(max-width:991px)": {
                            //     height: "22px",
                            //     width: "22px",
                            // },
                            // " @media(max-width:479px)": {
                            //     height: "18px",
                            //     width: "18px",
                            // },
                        }
                    }
                    width="25px"
                    height="25px"
                />
            </Stack>
        </Box>
    );
}
