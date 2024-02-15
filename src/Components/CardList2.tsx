// import React from "react";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";

export default function CardList2() {
    return (
        <Box
            sx={{
                fontFamily: "sans-serif",
                width: "100%",
                maxWidth: "1300px",
                backgroundColor: "rgb(8,8,8)",
                padding: "15px 5px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "1180px",
                    margin: "0 auto",
                    gap: "1.5rem",
                    paddingBottom: "1rem",
                    " @media(max-width:479px)": { gap: "0.8rem" },
                }}
            >
                <Stack
                    sx={{
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        width: "100%",
                        " @media(max-width:991px)": { padding: "0px 0.5rem" },
                        " @media(max-width:479px)": { padding: "0px 0.5rem" },
                    }}
                    spacing="0px"
                >
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik0yMiAxMUg0LjQxNGw1LjI5My01LjI5M2ExIDEgMCAxIDAtMS40MTQtMS40MTRsLTcgN2ExIDEgMCAwIDAgMCAxLjQxNGw3IDdhMSAxIDAgMCAwIDEuNDE0LTEuNDE0TDQuNDE0IDEzSDIyYTEgMSAwIDAgMCAwLTJ6IiBmaWxsPSIjODU5Mjk3IiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                        width="28px"
                        height="28px"
                    />
                    <Box
                        sx={{
                            display: "flex",
                            width: "76%",
                            justifyContent: "space-between",
                            marginLeft: "auto",
                            alignItems: "center",
                            " @media(max-width:991px)": {
                                width: "100%",
                                flexDirection: "column",
                            },
                            " @media(max-width:479px)": {
                                width: "100%",
                                flexDirection: "column",
                            },
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                color: "#f5f5f5",
                                fontSize: "40px",
                                " @media(max-width:991px)": {
                                    fontSize: "30px",
                                },
                                " @media(max-width:479px)": {
                                    fontSize: "20px",
                                },
                            }}
                        >
                            Start with a Template
                        </Typography>
                        <Link
                            sx={{
                                border: "none",
                                backgroundColor: "transparent",
                                gap: "5px",
                                alignItems: "center",
                                textDecoration: "none",
                                display: "flex",
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{ color: "rgb(41, 171, 226)" }}
                            >
                                Start with an empty project
                            </Typography>
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Im0yMi43MDcgMTEuMjkzLTctN2ExIDEgMCAwIDAtMS40MTQgMS40MTRMMTkuNTg2IDExSDJhMSAxIDAgMCAwIDAgMmgxNy41ODZsLTUuMjkzIDUuMjkzYTEgMSAwIDEgMCAxLjQxNCAxLjQxNGw3LTdhMSAxIDAgMCAwIDAtMS40MTR6IiBmaWxsPSIjMjA3ZGE1IiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                width="16px"
                                height="16px"
                            />
                        </Link>
                    </Box>
                </Stack>
                <Box
                    sx={{
                        boxShadow: "0px 0px 0px 0px #0000",
                        backgroundColor: "rgb(82, 82, 227)",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        padding: "16px 36px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        opacity: "0.6",
                        gap: "15px",
                        color: "#f5f5f5",
                        " @media(max-width:991px)": {
                            padding: "0.7rem 1.8rem",
                        },
                        " @media(max-width:479px)": {
                            alignItems: "flex-start",
                            padding: "0.5rem 0.8rem",
                        },
                    }}
                >
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTI5MC4yMTEgMzYwLjcyN2EyNC44OTYgMjQuODk2IDAgMCAxLTE1LjAxMS0zLjM3NSAxNS41OTMgMTUuNTkzIDAgMCAxLTQuMzA1LTEyLjggNjYuNDkgNjYuNDkgMCAwIDEgMS4zOTYtMTEuNjM2Yy43ODEtNC4zOTQgMS43OS04Ljc0NCAzLjAyNS0xMy4wMzNsMTMuNzMxLTQ3LjI0NGE3MS41MzUgNzEuNTM1IDAgMCAwIDIuNzkzLTE0LjMxM2MwLTUuMjM2LjY5OC04Ljg0NC42OTgtMTAuOTM4YTMwLjYwMiAzMC42MDIgMCAwIDAtMTAuODIyLTI0LjMyIDQ1LjUgNDUuNSAwIDAgMC0zMC43Mi05LjMwOSA3OS43MiA3OS43MiAwIDAgMC0yMy4yNzMgMy44NGMtOC4yMjMgMi41Ni0xNi44NzMgNS42MjQtMjUuOTQ5IDkuMTkzbC0zLjk1NiAxNS4zNmMyLjY3Ni0uOTMxIDUuOTM1LTEuOTc4IDkuNjU4LTMuMTQyYTM5LjU3MiAzOS41NzIgMCAwIDEgMTAuOTM4LTEuNjI5IDIyLjM0MyAyMi4zNDMgMCAwIDEgMTQuNzc4IDMuNjA3IDE2Ljg3NSAxNi44NzUgMCAwIDEgMy44NCAxMi42ODQgNTUuMTkgNTUuMTkgMCAwIDEtMS4yOCAxMS42MzZjLS44MTUgNC4wNzMtMS44NjIgOC4zNzgtMy4xNDIgMTIuOTE2TDIxOC43NjMgMzI1LjdhMTM1LjY1MSAxMzUuNjUxIDAgMCAwLTIuNjc2IDEzLjM4MiA4My4xMTggODMuMTE4IDAgMCAwLS44MTUgMTEuNjM2IDMwLjM2OSAzMC4zNjkgMCAwIDAgMTEuNjM2IDI0LjA4NyA0Ni41NSA0Ni41NSAwIDAgMCAzMS4xODUgOS41NDIgNzEuNzggNzEuNzggMCAwIDAgMjMuMjczLTMuMzc1YzYuNTk0LTIuMjUgMTUuMzk5LTUuNDY5IDI2LjQxNS05LjY1OGwzLjcyNC0xNC42NjJhNjQuMjgzIDY0LjI4MyAwIDAgMS05LjE5MyAzLjAyNSA0NC4xOSA0NC4xOSAwIDAgMS0xMi4xMDEgMS4wNXpNMzA0Ljc1NiAxMzYuNzI3QTMzLjE2MyAzMy4xNjMgMCAwIDAgMjgxLjQ4MyAxMjhhMzMuMzk2IDMzLjM5NiAwIDAgMC0yMy4yNzMgOC43MjdjLTExLjYzMiAxMC4wMy0xMi45MzEgMjcuNTkxLTIuOSAzOS4yMjRhMjcuNzYyIDI3Ljc2MiAwIDAgMCAyLjkgMi45YzEzLjI1MiAxMS44NTMgMzMuMjk0IDExLjg1MyA0Ni41NDUgMCAxMS42MzItMTAuMTI5IDEyLjg1MS0yNy43NjkgMi43MjItMzkuNDAxYTI3Ljc1NCAyNy43NTQgMCAwIDAtMi43MjEtMi43MjN6IiBmaWxsPSIjOWRhY2IyIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTI1NiAwQzExNC42MTUgMCAwIDExNC42MTUgMCAyNTZzMTE0LjYxNSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYxNSAyNTYtMjU2UzM5Ny4zODUgMCAyNTYgMHptMCA0ODguNzI3QzEyNy40NjggNDg4LjcyNyAyMy4yNzMgMzg0LjUzMiAyMy4yNzMgMjU2UzEyNy40NjggMjMuMjczIDI1NiAyMy4yNzMgNDg4LjcyNyAxMjcuNDY4IDQ4OC43MjcgMjU2IDM4NC41MzIgNDg4LjcyNyAyNTYgNDg4LjcyN3oiIGZpbGw9IiM5ZGFjYjIiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                        style={{ minWidth: "18px" }}
                        width="18px"
                        height="18px"
                    />
                    <Typography variant="subtitle1" sx={{ fontSize: "15px" }}>
                        Select a template to install demo content and view the
                        code implementation, or start from scratch with an empty
                        project.
                    </Typography>
                </Box>
                <Stack
                    sx={{ width: "100%", alignItems: "center" }}
                    spacing="0px"
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                            gridGap: "24px",
                            width: "100%",
                            padding: "10px",
                            " @media(max-width:991px)": { gridGap: "1rem" },
                            " @media(max-width:479px)": { gridGap: "0.8rem" },
                        }}
                    >
                        <Card
                            sx={{
                                boxShadow:
                                    "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderRadius: "1rem",
                                backgroundColor: "inherit",
                                border: "1px solid rgb(105, 121, 128)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                gap: "16px",
                                padding: "16px",
                                width: "100%",
                                " @media(max-width:479px)": {
                                    padding: "0.7rem",
                                    gap: "0.7rem",
                                },
                            }}
                        >
                            <Box sx={{ maxHeight: "240px" }}>
                                <img
                                    src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1f29c7e8-e849-4023-aaa0-21aa9bcdd084-27513630-ff00-11ed-9b95-a751e8cba36f-next.jpg"
                                    style={{
                                        borderRadius: "0.75rem",
                                        objectFit: "cover",
                                    }}
                                    height="100%"
                                    width="100%"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "8px",
                                    " @media(max-width:991px)": {
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    },
                                    " @media(max-width:479px)": {
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: "#f5f5f5",
                                        fontSize: "20px",
                                        width: "55%",
                                        " @media(max-width:991px)": {
                                            width: "100%",
                                        },
                                        " @media(max-width:479px)": {
                                            width: "100%",
                                        },
                                    }}
                                >
                                    Simple Next.js Blog
                                </Typography>
                                <Stack
                                    sx={{
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                    }}
                                    spacing="6px"
                                    direction="row"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                                        style={{ minWidth: "18px" }}
                                        width="18px"
                                        height="18px"
                                    />
                                    <img
                                        src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/a86e7833-08f0-4742-815b-1fec79a1c67a-download (1).png"
                                        height="24px"
                                        width="24px"
                                    />
                                    <img
                                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcwLjcyNyA0NzAuNzI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzAuNzI3IDQ3MC43Mjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM0RENGRTA7IiBkPSJNNDQ1LjkxLDMwNi4xNTVjLTUuNzQ3LTIxLjk0My0yMS40Mi00NS45NzUtNDMuODg2LTcwLjUzMWMyMi40NjUtMjQuNTU1LDM4LjEzOS00OS4xMSw0My44ODYtNzAuNTMxDQoJYzQuNzAyLTE3Ljc2MywzLjEzNS0zMy45NTktNC4xOC00Ny4wMmwwLDBjLTE4LjgwOC0zMi4zOTItNjYuODczLTM3LjA5NC0xMjIuNzc2LTI1LjA3OEMzMDEuMTkyLDM4LjY2MSwyNzMuNTAyLDAsMjM1LjM2MywwDQoJYy0zNS4wMDQsMC02NC43ODQsMzUuNTI3LTgzLjU5Miw5Mi45OTZjLTYuNzkyLTEuNTY3LTEzLjA2MS0yLjYxMi0xOS44NTMtMy42NTdjLTUxLjItNy4zMTQtODguMjk0LDIuNjEyLTEwMi45MjIsMjguNzM1DQoJYy03LjMxNCwxMy4wNjEtOC44ODIsMjkuMjU3LTQuMTgsNDcuMDJjNS43NDcsMjEuOTQzLDIxLjQyLDQ1Ljk3Niw0My44ODYsNzAuNTMxYy0yMi40NjUsMjQuNTU1LTM4LjEzOSw0OS4xMS00My44ODYsNzAuNTMxDQoJYy00LjcwMiwxNy43NjMtMy4xMzUsMzMuOTU5LDQuMTgsNDcuMDJDNDEuMDEyLDM3My41NTEsNjYuMDksMzg0LDEwMS4wOTQsMzg0YzkuNDA0LDAsMTkuODUzLTEuMDQ1LDMwLjgyNC0yLjYxMg0KCWM2LjI2OS0xLjA0NSwxMy4wNjEtMi4wOSwxOS44NTMtMy42NTdjMTguMjg2LDU3LjQ2OSw0OC41ODgsOTIuOTk2LDgzLjU5Miw5Mi45OTZjMzguMTM5LDAsNjUuODI5LTM4LjY2MSw4My4wNjktOTIuOTk2DQoJYzE4LjI4Niw0LjE4LDM1LjUyNyw2LjI2OSw1MS43MjIsNi4yNjljMzIuOTE0LDAsNTguNTE0LTkuNDA0LDcxLjU3Ni0zMS4zNDdsMCwwQzQ0OS4wNDUsMzQwLjExNCw0NTAuNjEyLDMyMy45MTgsNDQ1LjkxLDMwNi4xNTV6DQoJIE0zNzAuMTU1LDExOC4wNzNjMjIuNDY1LDAsMzguNjYxLDUuNzQ3LDQ0LjkzMSwxNi4xOTZjMy4xMzUsNS43NDcsMy42NTcsMTMuNTg0LDEuMDQ1LDIyLjk4OA0KCWMtNC4xOCwxNS4xNTEtMTYuMTk2LDM1LjAwNC0zNS41MjcsNTYuOTQ3Yy0xMy4wNjEtMTIuMDE2LTI4LjIxMi0yNC4wMzMtNDQuNDA4LTM1LjUyN2MtMi4wOS0xOC44MDgtNS4yMjQtMzcuNjE2LTguODgyLTU0Ljg1Nw0KCUMzNDIuOTg4LDExOS42NDEsMzU3LjYxNiwxMTguMDczLDM3MC4xNTUsMTE4LjA3M3ogTTI3MS40MTIsMjk3LjI3M2MtMTIuMDE2LDYuNzkyLTI0LjU1NSwxMy4wNjEtMzYuMDQ5LDE4LjgwOA0KCWMtMTIuMDE2LTUuNzQ3LTI0LjAzMy0xMi4wMTYtMzYuMDQ5LTE4LjgwOGMtMTIuNTM5LTYuNzkyLTIzLjUxLTE0LjEwNi0zNC40ODItMjEuNDJjLTEuMDQ1LTEzLjA2MS0xLjU2Ny0yNi42NDUtMS41NjctNDAuMjI5DQoJczAuNTIyLTI3LjE2NywxLjU2Ny00MC4yMjljMTAuOTcxLTcuMzE0LDIxLjk0My0xNC4xMDYsMzQuNDgyLTIxLjQyYzEyLjAxNi02Ljc5MiwyNC4wMzMtMTMuMDYxLDM2LjA0OS0xOC44MDgNCgljMTIuMDE2LDUuNzQ3LDI0LjAzMywxMi4wMTYsMzYuMDQ5LDE4LjgwOGMxMi41MzksNi43OTIsMjMuNTEsMTQuMTA2LDM0LjQ4MiwyMS40MmMxLjA0NSwxMy4wNjEsMS41NjcsMjYuNjQ1LDEuNTY3LDQwLjIyOQ0KCWMwLDEzLjU4NC0wLjUyMiwyNy4xNjctMS41NjcsNDAuMjI5QzI5NS40NDUsMjgzLjE2NywyODMuOTUxLDI5MC40ODIsMjcxLjQxMiwyOTcuMjczeiBNMzAxLjE5MiwzMTYuMDgyDQoJYy0xLjU2Nyw4LjM1OS0zLjEzNSwxNi4xOTYtNC43MDIsMjQuMDMzYy03LjgzNy0yLjYxMi0xNS42NzMtNS4yMjQtMjMuNTEtOC4zNTljNC43MDItMi42MTIsOS40MDQtNS4yMjQsMTQuMTA2LTcuODM3DQoJQzI5MS43ODgsMzIxLjgyOSwyOTYuNDksMzE4LjY5NCwzMDEuMTkyLDMxNi4wODJ6IE0xOTcuNzQ3LDMzMi4yNzhjLTcuODM3LDMuMTM1LTE1LjY3Myw1Ljc0Ny0yMy41MSw3LjgzNw0KCWMtMS41NjctNy44MzctMy4xMzUtMTUuNjczLTQuNzAyLTI0LjAzM2M0LjcwMiwyLjYxMiw5LjQwNCw1Ljc0NywxNC4xMDYsOC4zNTlDMTg4LjM0MywzMjcuMDUzLDE5My4wNDUsMzI5LjY2NSwxOTcuNzQ3LDMzMi4yNzh6DQoJIE0xMzEuOTE4LDI1MS44MmMtNi43OTItNS43NDctMTMuMDYxLTEwLjk3MS0xOS4zMzEtMTYuMTk2YzUuNzQ3LTUuMjI0LDEyLjUzOS0xMC45NzEsMTkuMzMxLTE2LjE5NmMwLDUuMjI0LDAsMTAuOTcxLDAsMTYuMTk2DQoJQzEzMS45MTgsMjQxLjM3MSwxMzEuOTE4LDI0Ni41OTYsMTMxLjkxOCwyNTEuODJ6IE0xNjkuNTM1LDE1NS4xNjdjMS41NjctOC4zNTksMy4xMzUtMTYuMTk2LDQuNzAyLTI0LjAzMw0KCWM3LjgzNywyLjA5LDE1LjE1MSw1LjIyNSwyMy41MSw3LjgzN2MtNC43MDIsMi42MTItOS40MDQsNS4yMjQtMTQuMTA2LDcuODM3QzE3OC45MzksMTQ5LjQyLDE3NC4yMzcsMTUyLjU1NSwxNjkuNTM1LDE1NS4xNjd6DQoJIE0yNzIuOTgsMTM4Ljk3MWM3LjgzNy0zLjEzNSwxNi4xOTYtNS43NDcsMjMuNTEtOC4zNTljMS41NjcsNy44MzcsMy4xMzUsMTUuNjczLDQuNzAyLDI0LjAzMw0KCWMtNC43MDItMi42MTItOS40MDQtNS43NDctMTQuMTA2LTguMzU5QzI4Mi4zODQsMTQ0LjE5NiwyNzcuNjgyLDE0MS41ODQsMjcyLjk4LDEzOC45NzF6IE0zMzguMjg2LDIxOS40MjkNCgljNi43OTIsNS43NDcsMTMuMDYxLDEwLjk3MSwxOS4zMzEsMTYuMTk2Yy01Ljc0Nyw1LjIyNC0xMi41MzksMTAuOTcxLTE5LjMzMSwxNi4xOTZjMC01Ljc0NywwLjUyMi0xMC45NzEsMC41MjItMTYuMTk2DQoJQzMzOC44MDgsMjMwLjQsMzM4LjgwOCwyMjQuNjUzLDMzOC4yODYsMjE5LjQyOXogTTE4Ny44Miw4Ni4yMDRjMTMuNTg0LTM0LjQ4MiwzMS4zNDctNTQuODU3LDQ3LjU0My01NC44NTcNCglzMzMuOTU5LDIwLjM3Niw0Ny41NDMsNTQuMzM1YzIuMDksNC43MDIsMy42NTcsOS45MjcsNS43NDcsMTUuMTUxYy0xNy4yNDEsNS4yMjQtMzUuMDA0LDEyLjAxNi01Mi43NjcsMTkuODUzDQoJYy0xNy43NjMtNy44MzctMzYuMDQ5LTE0LjYyOS01My4yOS0xOS44NTNDMTg0LjE2Myw5NS42MDgsMTg1LjczMSw5MC45MDYsMTg3LjgyLDg2LjIwNHogTTU2LjE2MywxMzMuNzQ3DQoJYzUuNzQ3LTEwLjQ0OSwyMS45NDMtMTUuNjczLDQzLjg4Ni0xNS42NzNjMTIuNTM5LDAsMjcuMTY3LDEuNTY3LDQzLjM2Myw1LjIyNGMtMy42NTcsMTcuMjQxLTYuNzkyLDM1LjUyNy04Ljg4Miw1NC44NTcNCgljLTE2LjE5NiwxMS40OTQtMzAuODI0LDIzLjUxLTQzLjg4NiwzNS41MjdjLTE5Ljg1My0yMS40Mi0zMS4zNDctNDEuMjczLTM1LjUyNy01Ni45NDcNCglDNTIuNTA2LDE0Ny4zMzEsNTMuMDI5LDEzOS40OTQsNTYuMTYzLDEzMy43NDd6IE01Ni4xNjMsMzM3LjUwMmMtMy4xMzUtNS43NDctMy42NTctMTMuNTg0LTEuMDQ1LTIyLjk4OA0KCWM0LjE4LTE1LjE1MSwxNi4xOTYtMzUuMDA0LDM1LjUyNy01Ni45NDdjMTMuMDYxLDEyLjAxNiwyOC4yMTIsMjQuMDMzLDQzLjg4NiwzNS41MjdjMi4wOSwxOS4zMzEsNC43MDIsMzcuNjE2LDguODgyLDU0Ljg1Nw0KCUM5OC40ODIsMzU3LjM1NSw2NS41NjcsMzUzLjY5OCw1Ni4xNjMsMzM3LjUwMnogTTI4Mi45MDYsMzg1LjU2N2MtMTMuNTg0LDMzLjk1OS0zMS4zNDcsNTQuMzM1LTQ3LjU0Myw1NC4zMzUNCglzLTMzLjk1OS0yMC4zNzYtNDcuNTQzLTU0Ljg1N2MtMi4wOS00LjcwMi0zLjY1Ny05LjkyNy01LjIyNC0xNS4xNTFjMTcuMjQxLTUuMjI0LDM1LjAwNC0xMi4wMTYsNTMuMjktMTkuODUzDQoJYzE3Ljc2Myw3LjgzNywzNS41MjcsMTQuNjI5LDUyLjc2NywxOS44NTNDMjg2LjU2MywzNzUuNjQxLDI4NC45OTYsMzgwLjM0MywyODIuOTA2LDM4NS41Njd6IE00MTQuNTYzLDMzNy41MDINCgljLTkuNDA0LDE2LjE5Ni00Mi4zMTgsMjAuMzc2LTg3Ljc3MSwxMC45NzFjNC4xOC0xNy43NjMsNi43OTItMzYuMDQ5LDguODgyLTU0Ljg1N2MxNi4xOTYtMTEuNDk0LDMwLjgyNC0yMy41MSw0NC40MDgtMzUuNTI3DQoJYzE5Ljg1MywyMS40MiwzMS4zNDcsNDEuMjczLDM1LjUyNyw1Ni45NDdDNDE4LjIyLDMyMy45MTgsNDE3LjY5OCwzMzEuNzU1LDQxNC41NjMsMzM3LjUwMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNENEUxRjQ7IiBkPSJNMjM1LjM2MywxODguNjA0Yy0yNi4xMjIsMC00Ny4wMiwyMC44OTgtNDcuMDIsNDcuMDJzMjAuODk4LDQ3LjAyLDQ3LjAyLDQ3LjAyDQoJYzI2LjEyMiwwLDQ3LjAyLTIwLjg5OCw0Ny4wMi00Ny4wMlMyNjEuNDg2LDE4OC42MDQsMjM1LjM2MywxODguNjA0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                                        style={{
                                            height: "24px",
                                            width: "24px",
                                        }}
                                        width="25px"
                                        height="25px"
                                    />
                                </Stack>
                            </Box>
                            <Typography
                                variant="p"
                                sx={{
                                    color: "rgb(171, 187, 194)",
                                    fontSize: "15px",
                                }}
                            >
                                Showcase your Next projects and write blog posts
                                with this powered developer portfolio template.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    rowGap: "8px",
                                    " @media(max-width:479px)": {
                                        flexDirection: "column",
                                    },
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#182125",
                                        border: "none",
                                        color: "rgb(171, 187, 194)",
                                        font: "600 14px sans-serif",
                                        padding: "8px 16px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
                                        textTransform: "none",
                                    }}
                                >
                                    View repo
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "rgb(41, 171, 226)",
                                        border: "1px solid rgb(41, 171, 226)",
                                        color: "#f5f5f5",
                                        font: "600 14px sans-serif",
                                        padding: "8px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
                                        textTransform: "none",
                                    }}
                                >
                                    Select template
                                </Button>
                            </Box>
                        </Card>
                        <Card
                            sx={{
                                boxShadow:
                                    "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderRadius: "1rem",
                                backgroundColor: "inherit",
                                border: "1px solid rgb(105, 121, 128)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                gap: "16px",
                                padding: "16px",
                                width: "100%",
                                " @media(max-width:479px)": {
                                    padding: "0.7rem",
                                    gap: "0.7rem",
                                },
                            }}
                        >
                            <Box sx={{ maxHeight: "240px" }}>
                                <img
                                    src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1aa02185-e98c-4946-88da-faae0c40c01f-2188abd0-ea7d-11ed-985a-3383d9405b5e-dev-portfolio.jpg"
                                    style={{
                                        borderRadius: "0.75rem",
                                        objectFit: "cover",
                                    }}
                                    height="100%"
                                    width="100%"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "8px",
                                    " @media(max-width:991px)": {
                                        flexDirection: "column",
                                    },
                                    " @media(max-width:479px)": {
                                        flexDirection: "column",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: "#f5f5f5",
                                        fontSize: "20px",
                                        width: "55%",
                                        " @media(max-width:991px)": {
                                            width: "100%",
                                        },
                                        " @media(max-width:479px)": {
                                            width: "100%",
                                        },
                                    }}
                                >
                                    Simple React.js Blog
                                </Typography>
                                <Stack
                                    sx={{
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                    }}
                                    spacing="6px"
                                    direction="row"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                                        style={{ minWidth: "18px" }}
                                        width="18px"
                                        height="18px"
                                    />
                                    <img
                                        src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/a86e7833-08f0-4742-815b-1fec79a1c67a-download (1).png"
                                        height="24px"
                                        width="24px"
                                    />
                                    <img
                                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcwLjcyNyA0NzAuNzI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzAuNzI3IDQ3MC43Mjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM0RENGRTA7IiBkPSJNNDQ1LjkxLDMwNi4xNTVjLTUuNzQ3LTIxLjk0My0yMS40Mi00NS45NzUtNDMuODg2LTcwLjUzMWMyMi40NjUtMjQuNTU1LDM4LjEzOS00OS4xMSw0My44ODYtNzAuNTMxDQoJYzQuNzAyLTE3Ljc2MywzLjEzNS0zMy45NTktNC4xOC00Ny4wMmwwLDBjLTE4LjgwOC0zMi4zOTItNjYuODczLTM3LjA5NC0xMjIuNzc2LTI1LjA3OEMzMDEuMTkyLDM4LjY2MSwyNzMuNTAyLDAsMjM1LjM2MywwDQoJYy0zNS4wMDQsMC02NC43ODQsMzUuNTI3LTgzLjU5Miw5Mi45OTZjLTYuNzkyLTEuNTY3LTEzLjA2MS0yLjYxMi0xOS44NTMtMy42NTdjLTUxLjItNy4zMTQtODguMjk0LDIuNjEyLTEwMi45MjIsMjguNzM1DQoJYy03LjMxNCwxMy4wNjEtOC44ODIsMjkuMjU3LTQuMTgsNDcuMDJjNS43NDcsMjEuOTQzLDIxLjQyLDQ1Ljk3Niw0My44ODYsNzAuNTMxYy0yMi40NjUsMjQuNTU1LTM4LjEzOSw0OS4xMS00My44ODYsNzAuNTMxDQoJYy00LjcwMiwxNy43NjMtMy4xMzUsMzMuOTU5LDQuMTgsNDcuMDJDNDEuMDEyLDM3My41NTEsNjYuMDksMzg0LDEwMS4wOTQsMzg0YzkuNDA0LDAsMTkuODUzLTEuMDQ1LDMwLjgyNC0yLjYxMg0KCWM2LjI2OS0xLjA0NSwxMy4wNjEtMi4wOSwxOS44NTMtMy42NTdjMTguMjg2LDU3LjQ2OSw0OC41ODgsOTIuOTk2LDgzLjU5Miw5Mi45OTZjMzguMTM5LDAsNjUuODI5LTM4LjY2MSw4My4wNjktOTIuOTk2DQoJYzE4LjI4Niw0LjE4LDM1LjUyNyw2LjI2OSw1MS43MjIsNi4yNjljMzIuOTE0LDAsNTguNTE0LTkuNDA0LDcxLjU3Ni0zMS4zNDdsMCwwQzQ0OS4wNDUsMzQwLjExNCw0NTAuNjEyLDMyMy45MTgsNDQ1LjkxLDMwNi4xNTV6DQoJIE0zNzAuMTU1LDExOC4wNzNjMjIuNDY1LDAsMzguNjYxLDUuNzQ3LDQ0LjkzMSwxNi4xOTZjMy4xMzUsNS43NDcsMy42NTcsMTMuNTg0LDEuMDQ1LDIyLjk4OA0KCWMtNC4xOCwxNS4xNTEtMTYuMTk2LDM1LjAwNC0zNS41MjcsNTYuOTQ3Yy0xMy4wNjEtMTIuMDE2LTI4LjIxMi0yNC4wMzMtNDQuNDA4LTM1LjUyN2MtMi4wOS0xOC44MDgtNS4yMjQtMzcuNjE2LTguODgyLTU0Ljg1Nw0KCUMzNDIuOTg4LDExOS42NDEsMzU3LjYxNiwxMTguMDczLDM3MC4xNTUsMTE4LjA3M3ogTTI3MS40MTIsMjk3LjI3M2MtMTIuMDE2LDYuNzkyLTI0LjU1NSwxMy4wNjEtMzYuMDQ5LDE4LjgwOA0KCWMtMTIuMDE2LTUuNzQ3LTI0LjAzMy0xMi4wMTYtMzYuMDQ5LTE4LjgwOGMtMTIuNTM5LTYuNzkyLTIzLjUxLTE0LjEwNi0zNC40ODItMjEuNDJjLTEuMDQ1LTEzLjA2MS0xLjU2Ny0yNi42NDUtMS41NjctNDAuMjI5DQoJczAuNTIyLTI3LjE2NywxLjU2Ny00MC4yMjljMTAuOTcxLTcuMzE0LDIxLjk0My0xNC4xMDYsMzQuNDgyLTIxLjQyYzEyLjAxNi02Ljc5MiwyNC4wMzMtMTMuMDYxLDM2LjA0OS0xOC44MDgNCgljMTIuMDE2LDUuNzQ3LDI0LjAzMywxMi4wMTYsMzYuMDQ5LDE4LjgwOGMxMi41MzksNi43OTIsMjMuNTEsMTQuMTA2LDM0LjQ4MiwyMS40MmMxLjA0NSwxMy4wNjEsMS41NjcsMjYuNjQ1LDEuNTY3LDQwLjIyOQ0KCWMwLDEzLjU4NC0wLjUyMiwyNy4xNjctMS41NjcsNDAuMjI5QzI5NS40NDUsMjgzLjE2NywyODMuOTUxLDI5MC40ODIsMjcxLjQxMiwyOTcuMjczeiBNMzAxLjE5MiwzMTYuMDgyDQoJYy0xLjU2Nyw4LjM1OS0zLjEzNSwxNi4xOTYtNC43MDIsMjQuMDMzYy03LjgzNy0yLjYxMi0xNS42NzMtNS4yMjQtMjMuNTEtOC4zNTljNC43MDItMi42MTIsOS40MDQtNS4yMjQsMTQuMTA2LTcuODM3DQoJQzI5MS43ODgsMzIxLjgyOSwyOTYuNDksMzE4LjY5NCwzMDEuMTkyLDMxNi4wODJ6IE0xOTcuNzQ3LDMzMi4yNzhjLTcuODM3LDMuMTM1LTE1LjY3Myw1Ljc0Ny0yMy41MSw3LjgzNw0KCWMtMS41NjctNy44MzctMy4xMzUtMTUuNjczLTQuNzAyLTI0LjAzM2M0LjcwMiwyLjYxMiw5LjQwNCw1Ljc0NywxNC4xMDYsOC4zNTlDMTg4LjM0MywzMjcuMDUzLDE5My4wNDUsMzI5LjY2NSwxOTcuNzQ3LDMzMi4yNzh6DQoJIE0xMzEuOTE4LDI1MS44MmMtNi43OTItNS43NDctMTMuMDYxLTEwLjk3MS0xOS4zMzEtMTYuMTk2YzUuNzQ3LTUuMjI0LDEyLjUzOS0xMC45NzEsMTkuMzMxLTE2LjE5NmMwLDUuMjI0LDAsMTAuOTcxLDAsMTYuMTk2DQoJQzEzMS45MTgsMjQxLjM3MSwxMzEuOTE4LDI0Ni41OTYsMTMxLjkxOCwyNTEuODJ6IE0xNjkuNTM1LDE1NS4xNjdjMS41NjctOC4zNTksMy4xMzUtMTYuMTk2LDQuNzAyLTI0LjAzMw0KCWM3LjgzNywyLjA5LDE1LjE1MSw1LjIyNSwyMy41MSw3LjgzN2MtNC43MDIsMi42MTItOS40MDQsNS4yMjQtMTQuMTA2LDcuODM3QzE3OC45MzksMTQ5LjQyLDE3NC4yMzcsMTUyLjU1NSwxNjkuNTM1LDE1NS4xNjd6DQoJIE0yNzIuOTgsMTM4Ljk3MWM3LjgzNy0zLjEzNSwxNi4xOTYtNS43NDcsMjMuNTEtOC4zNTljMS41NjcsNy44MzcsMy4xMzUsMTUuNjczLDQuNzAyLDI0LjAzMw0KCWMtNC43MDItMi42MTItOS40MDQtNS43NDctMTQuMTA2LTguMzU5QzI4Mi4zODQsMTQ0LjE5NiwyNzcuNjgyLDE0MS41ODQsMjcyLjk4LDEzOC45NzF6IE0zMzguMjg2LDIxOS40MjkNCgljNi43OTIsNS43NDcsMTMuMDYxLDEwLjk3MSwxOS4zMzEsMTYuMTk2Yy01Ljc0Nyw1LjIyNC0xMi41MzksMTAuOTcxLTE5LjMzMSwxNi4xOTZjMC01Ljc0NywwLjUyMi0xMC45NzEsMC41MjItMTYuMTk2DQoJQzMzOC44MDgsMjMwLjQsMzM4LjgwOCwyMjQuNjUzLDMzOC4yODYsMjE5LjQyOXogTTE4Ny44Miw4Ni4yMDRjMTMuNTg0LTM0LjQ4MiwzMS4zNDctNTQuODU3LDQ3LjU0My01NC44NTcNCglzMzMuOTU5LDIwLjM3Niw0Ny41NDMsNTQuMzM1YzIuMDksNC43MDIsMy42NTcsOS45MjcsNS43NDcsMTUuMTUxYy0xNy4yNDEsNS4yMjQtMzUuMDA0LDEyLjAxNi01Mi43NjcsMTkuODUzDQoJYy0xNy43NjMtNy44MzctMzYuMDQ5LTE0LjYyOS01My4yOS0xOS44NTNDMTg0LjE2Myw5NS42MDgsMTg1LjczMSw5MC45MDYsMTg3LjgyLDg2LjIwNHogTTU2LjE2MywxMzMuNzQ3DQoJYzUuNzQ3LTEwLjQ0OSwyMS45NDMtMTUuNjczLDQzLjg4Ni0xNS42NzNjMTIuNTM5LDAsMjcuMTY3LDEuNTY3LDQzLjM2Myw1LjIyNGMtMy42NTcsMTcuMjQxLTYuNzkyLDM1LjUyNy04Ljg4Miw1NC44NTcNCgljLTE2LjE5NiwxMS40OTQtMzAuODI0LDIzLjUxLTQzLjg4NiwzNS41MjdjLTE5Ljg1My0yMS40Mi0zMS4zNDctNDEuMjczLTM1LjUyNy01Ni45NDcNCglDNTIuNTA2LDE0Ny4zMzEsNTMuMDI5LDEzOS40OTQsNTYuMTYzLDEzMy43NDd6IE01Ni4xNjMsMzM3LjUwMmMtMy4xMzUtNS43NDctMy42NTctMTMuNTg0LTEuMDQ1LTIyLjk4OA0KCWM0LjE4LTE1LjE1MSwxNi4xOTYtMzUuMDA0LDM1LjUyNy01Ni45NDdjMTMuMDYxLDEyLjAxNiwyOC4yMTIsMjQuMDMzLDQzLjg4NiwzNS41MjdjMi4wOSwxOS4zMzEsNC43MDIsMzcuNjE2LDguODgyLDU0Ljg1Nw0KCUM5OC40ODIsMzU3LjM1NSw2NS41NjcsMzUzLjY5OCw1Ni4xNjMsMzM3LjUwMnogTTI4Mi45MDYsMzg1LjU2N2MtMTMuNTg0LDMzLjk1OS0zMS4zNDcsNTQuMzM1LTQ3LjU0Myw1NC4zMzUNCglzLTMzLjk1OS0yMC4zNzYtNDcuNTQzLTU0Ljg1N2MtMi4wOS00LjcwMi0zLjY1Ny05LjkyNy01LjIyNC0xNS4xNTFjMTcuMjQxLTUuMjI0LDM1LjAwNC0xMi4wMTYsNTMuMjktMTkuODUzDQoJYzE3Ljc2Myw3LjgzNywzNS41MjcsMTQuNjI5LDUyLjc2NywxOS44NTNDMjg2LjU2MywzNzUuNjQxLDI4NC45OTYsMzgwLjM0MywyODIuOTA2LDM4NS41Njd6IE00MTQuNTYzLDMzNy41MDINCgljLTkuNDA0LDE2LjE5Ni00Mi4zMTgsMjAuMzc2LTg3Ljc3MSwxMC45NzFjNC4xOC0xNy43NjMsNi43OTItMzYuMDQ5LDguODgyLTU0Ljg1N2MxNi4xOTYtMTEuNDk0LDMwLjgyNC0yMy41MSw0NC40MDgtMzUuNTI3DQoJYzE5Ljg1MywyMS40MiwzMS4zNDcsNDEuMjczLDM1LjUyNyw1Ni45NDdDNDE4LjIyLDMyMy45MTgsNDE3LjY5OCwzMzEuNzU1LDQxNC41NjMsMzM3LjUwMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNENEUxRjQ7IiBkPSJNMjM1LjM2MywxODguNjA0Yy0yNi4xMjIsMC00Ny4wMiwyMC44OTgtNDcuMDIsNDcuMDJzMjAuODk4LDQ3LjAyLDQ3LjAyLDQ3LjAyDQoJYzI2LjEyMiwwLDQ3LjAyLTIwLjg5OCw0Ny4wMi00Ny4wMlMyNjEuNDg2LDE4OC42MDQsMjM1LjM2MywxODguNjA0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                                        style={{
                                            height: "24px",
                                            width: "24px",
                                        }}
                                        width="25px"
                                        height="25px"
                                    />
                                </Stack>
                            </Box>
                            <Typography
                                variant="p"
                                sx={{
                                    color: "rgb(171, 187, 194)",
                                    fontSize: "15px",
                                }}
                            >
                                Showcase your React projects and write blog
                                posts with thispowered developer portfolio
                                template.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    rowGap: "8px",
                                    " @media(max-width:479px)": {
                                        flexDirection: "column",
                                    },
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#182125",
                                        border: "none",
                                        color: "rgb(171, 187, 194)",
                                        font: "600 14px sans-serif",
                                        padding: "8px 16px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
                                        textTransform: "none",
                                    }}
                                >
                                    View repo
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "rgb(41, 171, 226)",
                                        border: "1px solid rgb(41, 171, 226)",
                                        color: "#f5f5f5",
                                        font: "600 14px sans-serif",
                                        padding: "8px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
                                        textTransform: "none",
                                    }}
                                >
                                    Select template
                                </Button>
                            </Box>
                        </Card>
                        <Card
                            sx={{
                                boxShadow:
                                    "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderRadius: "1rem",
                                backgroundColor: "inherit",
                                border: "1px solid rgb(105, 121, 128)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                gap: "16px",
                                padding: "16px",
                                width: "100%",
                                " @media(max-width:479px)": {
                                    padding: "0.7rem",
                                    gap: "0.7rem",
                                },
                            }}
                        >
                            <Box sx={{ maxHeight: "240px" }}>
                                <img
                                    src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1aa02185-e98c-4946-88da-faae0c40c01f-2188abd0-ea7d-11ed-985a-3383d9405b5e-dev-portfolio.jpg"
                                    style={{
                                        borderRadius: "0.75rem",
                                        objectFit: "cover",
                                    }}
                                    height="100%"
                                    width="100%"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "8px",
                                    " @media(max-width:991px)": {
                                        flexDirection: "column",
                                    },
                                    " @media(max-width:479px)": {
                                        flexDirection: "column",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: "#f5f5f5",
                                        fontSize: "20px",
                                        width: "55%",
                                        " @media(max-width:991px)": {
                                            width: "100%",
                                        },
                                        " @media(max-width:479px)": {
                                            width: "100%",
                                        },
                                    }}
                                >
                                    Simple Tailwind Blog
                                </Typography>
                                <Stack
                                    sx={{
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                    }}
                                    spacing="6px"
                                    direction="row"
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                                        style={{ minWidth: "18px" }}
                                        width="18px"
                                        height="18px"
                                    />
                                    <img
                                        src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/a86e7833-08f0-4742-815b-1fec79a1c67a-download (1).png"
                                        height="24px"
                                        width="24px"
                                    />
                                    <img
                                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcwLjcyNyA0NzAuNzI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzAuNzI3IDQ3MC43Mjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM0RENGRTA7IiBkPSJNNDQ1LjkxLDMwNi4xNTVjLTUuNzQ3LTIxLjk0My0yMS40Mi00NS45NzUtNDMuODg2LTcwLjUzMWMyMi40NjUtMjQuNTU1LDM4LjEzOS00OS4xMSw0My44ODYtNzAuNTMxDQoJYzQuNzAyLTE3Ljc2MywzLjEzNS0zMy45NTktNC4xOC00Ny4wMmwwLDBjLTE4LjgwOC0zMi4zOTItNjYuODczLTM3LjA5NC0xMjIuNzc2LTI1LjA3OEMzMDEuMTkyLDM4LjY2MSwyNzMuNTAyLDAsMjM1LjM2MywwDQoJYy0zNS4wMDQsMC02NC43ODQsMzUuNTI3LTgzLjU5Miw5Mi45OTZjLTYuNzkyLTEuNTY3LTEzLjA2MS0yLjYxMi0xOS44NTMtMy42NTdjLTUxLjItNy4zMTQtODguMjk0LDIuNjEyLTEwMi45MjIsMjguNzM1DQoJYy03LjMxNCwxMy4wNjEtOC44ODIsMjkuMjU3LTQuMTgsNDcuMDJjNS43NDcsMjEuOTQzLDIxLjQyLDQ1Ljk3Niw0My44ODYsNzAuNTMxYy0yMi40NjUsMjQuNTU1LTM4LjEzOSw0OS4xMS00My44ODYsNzAuNTMxDQoJYy00LjcwMiwxNy43NjMtMy4xMzUsMzMuOTU5LDQuMTgsNDcuMDJDNDEuMDEyLDM3My41NTEsNjYuMDksMzg0LDEwMS4wOTQsMzg0YzkuNDA0LDAsMTkuODUzLTEuMDQ1LDMwLjgyNC0yLjYxMg0KCWM2LjI2OS0xLjA0NSwxMy4wNjEtMi4wOSwxOS44NTMtMy42NTdjMTguMjg2LDU3LjQ2OSw0OC41ODgsOTIuOTk2LDgzLjU5Miw5Mi45OTZjMzguMTM5LDAsNjUuODI5LTM4LjY2MSw4My4wNjktOTIuOTk2DQoJYzE4LjI4Niw0LjE4LDM1LjUyNyw2LjI2OSw1MS43MjIsNi4yNjljMzIuOTE0LDAsNTguNTE0LTkuNDA0LDcxLjU3Ni0zMS4zNDdsMCwwQzQ0OS4wNDUsMzQwLjExNCw0NTAuNjEyLDMyMy45MTgsNDQ1LjkxLDMwNi4xNTV6DQoJIE0zNzAuMTU1LDExOC4wNzNjMjIuNDY1LDAsMzguNjYxLDUuNzQ3LDQ0LjkzMSwxNi4xOTZjMy4xMzUsNS43NDcsMy42NTcsMTMuNTg0LDEuMDQ1LDIyLjk4OA0KCWMtNC4xOCwxNS4xNTEtMTYuMTk2LDM1LjAwNC0zNS41MjcsNTYuOTQ3Yy0xMy4wNjEtMTIuMDE2LTI4LjIxMi0yNC4wMzMtNDQuNDA4LTM1LjUyN2MtMi4wOS0xOC44MDgtNS4yMjQtMzcuNjE2LTguODgyLTU0Ljg1Nw0KCUMzNDIuOTg4LDExOS42NDEsMzU3LjYxNiwxMTguMDczLDM3MC4xNTUsMTE4LjA3M3ogTTI3MS40MTIsMjk3LjI3M2MtMTIuMDE2LDYuNzkyLTI0LjU1NSwxMy4wNjEtMzYuMDQ5LDE4LjgwOA0KCWMtMTIuMDE2LTUuNzQ3LTI0LjAzMy0xMi4wMTYtMzYuMDQ5LTE4LjgwOGMtMTIuNTM5LTYuNzkyLTIzLjUxLTE0LjEwNi0zNC40ODItMjEuNDJjLTEuMDQ1LTEzLjA2MS0xLjU2Ny0yNi42NDUtMS41NjctNDAuMjI5DQoJczAuNTIyLTI3LjE2NywxLjU2Ny00MC4yMjljMTAuOTcxLTcuMzE0LDIxLjk0My0xNC4xMDYsMzQuNDgyLTIxLjQyYzEyLjAxNi02Ljc5MiwyNC4wMzMtMTMuMDYxLDM2LjA0OS0xOC44MDgNCgljMTIuMDE2LDUuNzQ3LDI0LjAzMywxMi4wMTYsMzYuMDQ5LDE4LjgwOGMxMi41MzksNi43OTIsMjMuNTEsMTQuMTA2LDM0LjQ4MiwyMS40MmMxLjA0NSwxMy4wNjEsMS41NjcsMjYuNjQ1LDEuNTY3LDQwLjIyOQ0KCWMwLDEzLjU4NC0wLjUyMiwyNy4xNjctMS41NjcsNDAuMjI5QzI5NS40NDUsMjgzLjE2NywyODMuOTUxLDI5MC40ODIsMjcxLjQxMiwyOTcuMjczeiBNMzAxLjE5MiwzMTYuMDgyDQoJYy0xLjU2Nyw4LjM1OS0zLjEzNSwxNi4xOTYtNC43MDIsMjQuMDMzYy03LjgzNy0yLjYxMi0xNS42NzMtNS4yMjQtMjMuNTEtOC4zNTljNC43MDItMi42MTIsOS40MDQtNS4yMjQsMTQuMTA2LTcuODM3DQoJQzI5MS43ODgsMzIxLjgyOSwyOTYuNDksMzE4LjY5NCwzMDEuMTkyLDMxNi4wODJ6IE0xOTcuNzQ3LDMzMi4yNzhjLTcuODM3LDMuMTM1LTE1LjY3Myw1Ljc0Ny0yMy41MSw3LjgzNw0KCWMtMS41NjctNy44MzctMy4xMzUtMTUuNjczLTQuNzAyLTI0LjAzM2M0LjcwMiwyLjYxMiw5LjQwNCw1Ljc0NywxNC4xMDYsOC4zNTlDMTg4LjM0MywzMjcuMDUzLDE5My4wNDUsMzI5LjY2NSwxOTcuNzQ3LDMzMi4yNzh6DQoJIE0xMzEuOTE4LDI1MS44MmMtNi43OTItNS43NDctMTMuMDYxLTEwLjk3MS0xOS4zMzEtMTYuMTk2YzUuNzQ3LTUuMjI0LDEyLjUzOS0xMC45NzEsMTkuMzMxLTE2LjE5NmMwLDUuMjI0LDAsMTAuOTcxLDAsMTYuMTk2DQoJQzEzMS45MTgsMjQxLjM3MSwxMzEuOTE4LDI0Ni41OTYsMTMxLjkxOCwyNTEuODJ6IE0xNjkuNTM1LDE1NS4xNjdjMS41NjctOC4zNTksMy4xMzUtMTYuMTk2LDQuNzAyLTI0LjAzMw0KCWM3LjgzNywyLjA5LDE1LjE1MSw1LjIyNSwyMy41MSw3LjgzN2MtNC43MDIsMi42MTItOS40MDQsNS4yMjQtMTQuMTA2LDcuODM3QzE3OC45MzksMTQ5LjQyLDE3NC4yMzcsMTUyLjU1NSwxNjkuNTM1LDE1NS4xNjd6DQoJIE0yNzIuOTgsMTM4Ljk3MWM3LjgzNy0zLjEzNSwxNi4xOTYtNS43NDcsMjMuNTEtOC4zNTljMS41NjcsNy44MzcsMy4xMzUsMTUuNjczLDQuNzAyLDI0LjAzMw0KCWMtNC43MDItMi42MTItOS40MDQtNS43NDctMTQuMTA2LTguMzU5QzI4Mi4zODQsMTQ0LjE5NiwyNzcuNjgyLDE0MS41ODQsMjcyLjk4LDEzOC45NzF6IE0zMzguMjg2LDIxOS40MjkNCgljNi43OTIsNS43NDcsMTMuMDYxLDEwLjk3MSwxOS4zMzEsMTYuMTk2Yy01Ljc0Nyw1LjIyNC0xMi41MzksMTAuOTcxLTE5LjMzMSwxNi4xOTZjMC01Ljc0NywwLjUyMi0xMC45NzEsMC41MjItMTYuMTk2DQoJQzMzOC44MDgsMjMwLjQsMzM4LjgwOCwyMjQuNjUzLDMzOC4yODYsMjE5LjQyOXogTTE4Ny44Miw4Ni4yMDRjMTMuNTg0LTM0LjQ4MiwzMS4zNDctNTQuODU3LDQ3LjU0My01NC44NTcNCglzMzMuOTU5LDIwLjM3Niw0Ny41NDMsNTQuMzM1YzIuMDksNC43MDIsMy42NTcsOS45MjcsNS43NDcsMTUuMTUxYy0xNy4yNDEsNS4yMjQtMzUuMDA0LDEyLjAxNi01Mi43NjcsMTkuODUzDQoJYy0xNy43NjMtNy44MzctMzYuMDQ5LTE0LjYyOS01My4yOS0xOS44NTNDMTg0LjE2Myw5NS42MDgsMTg1LjczMSw5MC45MDYsMTg3LjgyLDg2LjIwNHogTTU2LjE2MywxMzMuNzQ3DQoJYzUuNzQ3LTEwLjQ0OSwyMS45NDMtMTUuNjczLDQzLjg4Ni0xNS42NzNjMTIuNTM5LDAsMjcuMTY3LDEuNTY3LDQzLjM2Myw1LjIyNGMtMy42NTcsMTcuMjQxLTYuNzkyLDM1LjUyNy04Ljg4Miw1NC44NTcNCgljLTE2LjE5NiwxMS40OTQtMzAuODI0LDIzLjUxLTQzLjg4NiwzNS41MjdjLTE5Ljg1My0yMS40Mi0zMS4zNDctNDEuMjczLTM1LjUyNy01Ni45NDcNCglDNTIuNTA2LDE0Ny4zMzEsNTMuMDI5LDEzOS40OTQsNTYuMTYzLDEzMy43NDd6IE01Ni4xNjMsMzM3LjUwMmMtMy4xMzUtNS43NDctMy42NTctMTMuNTg0LTEuMDQ1LTIyLjk4OA0KCWM0LjE4LTE1LjE1MSwxNi4xOTYtMzUuMDA0LDM1LjUyNy01Ni45NDdjMTMuMDYxLDEyLjAxNiwyOC4yMTIsMjQuMDMzLDQzLjg4NiwzNS41MjdjMi4wOSwxOS4zMzEsNC43MDIsMzcuNjE2LDguODgyLDU0Ljg1Nw0KCUM5OC40ODIsMzU3LjM1NSw2NS41NjcsMzUzLjY5OCw1Ni4xNjMsMzM3LjUwMnogTTI4Mi45MDYsMzg1LjU2N2MtMTMuNTg0LDMzLjk1OS0zMS4zNDcsNTQuMzM1LTQ3LjU0Myw1NC4zMzUNCglzLTMzLjk1OS0yMC4zNzYtNDcuNTQzLTU0Ljg1N2MtMi4wOS00LjcwMi0zLjY1Ny05LjkyNy01LjIyNC0xNS4xNTFjMTcuMjQxLTUuMjI0LDM1LjAwNC0xMi4wMTYsNTMuMjktMTkuODUzDQoJYzE3Ljc2Myw3LjgzNywzNS41MjcsMTQuNjI5LDUyLjc2NywxOS44NTNDMjg2LjU2MywzNzUuNjQxLDI4NC45OTYsMzgwLjM0MywyODIuOTA2LDM4NS41Njd6IE00MTQuNTYzLDMzNy41MDINCgljLTkuNDA0LDE2LjE5Ni00Mi4zMTgsMjAuMzc2LTg3Ljc3MSwxMC45NzFjNC4xOC0xNy43NjMsNi43OTItMzYuMDQ5LDguODgyLTU0Ljg1N2MxNi4xOTYtMTEuNDk0LDMwLjgyNC0yMy41MSw0NC40MDgtMzUuNTI3DQoJYzE5Ljg1MywyMS40MiwzMS4zNDcsNDEuMjczLDM1LjUyNyw1Ni45NDdDNDE4LjIyLDMyMy45MTgsNDE3LjY5OCwzMzEuNzU1LDQxNC41NjMsMzM3LjUwMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNENEUxRjQ7IiBkPSJNMjM1LjM2MywxODguNjA0Yy0yNi4xMjIsMC00Ny4wMiwyMC44OTgtNDcuMDIsNDcuMDJzMjAuODk4LDQ3LjAyLDQ3LjAyLDQ3LjAyDQoJYzI2LjEyMiwwLDQ3LjAyLTIwLjg5OCw0Ny4wMi00Ny4wMlMyNjEuNDg2LDE4OC42MDQsMjM1LjM2MywxODguNjA0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                                        style={{
                                            height: "24px",
                                            width: "24px",
                                        }}
                                        width="25px"
                                        height="25px"
                                    />
                                    <img
                                        src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/bb683db5-0975-40be-be8b-5a768288d220-download.png"
                                        style={{
                                            height: "25px",
                                            width: "25px",
                                        }}
                                        height="190px"
                                        width="350px"
                                    />
                                </Stack>
                            </Box>
                            <Typography
                                variant="p"
                                sx={{
                                    color: "rgb(171, 187, 194)",
                                    fontSize: "15px",
                                }}
                            >
                                Showcase your Tailwind projects and write blog
                                posts with this powered developer portfolio
                                template.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    rowGap: "8px",
                                    " @media(max-width:479px)": {
                                        flexDirection: "column",
                                    },
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#182125",
                                        border: "none",
                                        color: "rgb(171, 187, 194)",
                                        font: "600 14px sans-serif",
                                        padding: "8px 16px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
                                        textTransform: "none",
                                    }}
                                >
                                    View repo
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "rgb(41, 171, 226)",
                                        border: "1px solid rgb(41, 171, 226)",
                                        color: "#f5f5f5",
                                        font: "600 14px sans-serif",
                                        padding: "8px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
                                        textTransform: "none",
                                    }}
                                >
                                    Select template
                                </Button>
                            </Box>
                        </Card>
                    </Box>
                    <Link
                        sx={{
                            display: "flex",
                            textDecoration: "none",
                            marginTop: "10px",
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                width: "fit-content",
                                color: "rgb(41, 171, 226)",
                            }}
                        >
                            View more tamplates
                        </Typography>
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGZpbGw9IiMyOWFiZTIiIGQ9Im0xNi4wMDQgOS40MTQtOC42MDcgOC42MDctMS40MTQtMS40MTRMMTQuNTg5IDhINy4wMDRWNmgxMXYxMWgtMnoiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                            width="19px"
                            height="19px"
                        />
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
}
