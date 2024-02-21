import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Input } from "@mui/material";
import { FormControl } from "@mui/material";
import { MenuItem as OptionItem } from "@mui/material";
import { Select } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";

export default function Header() {
    return (
        <Box
            sx={{
                fontFamily: "system-ui, sans-serif",
                display: "flex",
                justifyContent: "space-between",
                columnGap: "20px",
                width: "100%",
                // maxWidth: "1300px",
                backgroundColor: "rgb(8,8,8)",
                alignItems: "center",
                padding: "8px 10px",
                border: "1px solid white",
                borderRadius: "1rem",
            }}
        >
            <Stack sx={{ alignItems: "center" }} spacing="10px" direction="row">
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0ibTQ5OC4xOTUgMjIyLjY5NS0uMDM1LS4wMzVMMjg5LjMwNSAxMy44MTNDMjgwLjQwMiA0LjkwNSAyNjguNTY2IDAgMjU1Ljk3NyAwYy0xMi41OSAwLTI0LjQyNiA0LjkwMi0zMy4zMzIgMTMuODA5TDEzLjg5OCAyMjIuNTVjLS4wNy4wNy0uMTQuMTQ0LS4yMS4yMTUtMTguMjgyIDE4LjM4Ni0xOC4yNSA0OC4yMTguMDkgNjYuNTU4IDguMzc4IDguMzgzIDE5LjQ0NSAxMy4yMzggMzEuMjc3IDEzLjc0Ni40OC4wNDcuOTY1LjA3IDEuNDUzLjA3aDguMzI0djE1My43QzU0LjgzMiA0ODcuMjU0IDc5LjU3OCA1MTIgMTEwIDUxMmg4MS43MWM4LjI4MiAwIDE1LTYuNzE1IDE1LTE1VjM3Ni41YzAtMTMuODc5IDExLjI5LTI1LjE2OCAyNS4xNjktMjUuMTY4aDQ4LjE5NWMxMy44OCAwIDI1LjE2OCAxMS4yOSAyNS4xNjggMjUuMTY4VjQ5N2MwIDguMjg1IDYuNzE1IDE1IDE1IDE1aDgxLjcxMWMzMC40MjIgMCA1NS4xNjgtMjQuNzQ2IDU1LjE2OC01NS4xNnYtMTUzLjdoNy43MTljMTIuNTg2IDAgMjQuNDIyLTQuOTAyIDMzLjMzMi0xMy44MDggMTguMzYtMTguMzcxIDE4LjM2Ny00OC4yNTQuMDIzLTY2LjYzN3ptMCAwIiBmaWxsPSIjNWY2NTc3IiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    style={
                        {
                            // " @media(max-width:479px)": {
                            //     height: "20px",
                            //     width: "20px",
                            // },
                        }
                    }
                    width="25px"
                    height="25px"
                />
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTEzLjI4IDExMy4yODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Im04MC44NzIgMy40NzEtNjAuOTAzIDk4LjY2MmE3LjMwNSA3LjMwNSAwIDAgMCAyLjM4IDEwLjA1NyA3LjMgNy4zIDAgMCAwIDEwLjA1OS0yLjM4bDYwLjkwMy05OC42NjNBNy4zMDQgNy4zMDQgMCAwIDAgOTAuOTMgMS4wOTFhNy4zMDggNy4zMDggMCAwIDAtMTAuMDU4IDIuMzh6IiBmaWxsPSIjOWRhMGEzIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                    width="20px"
                    height="20px"
                />
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: "14px",
                        color: "#5f6577",
                        " @media(max-width:991px)": { whiteSpace: "nowrap" },
                        " @media(max-width:479px)": { display: "none" },
                    }}
                >
                    My company
                </Typography>
            </Stack>
            <Stack
                sx={{
                    alignItems: "center",
                    width: "50%",
                    " @media(max-width:991px)": {
                        width: "70%",
                        columnGap: "15px",
                    },
                    " @media(max-width:479px)": { flex: "1", columnGap: "8px" },
                }}
                spacing="20px"
                direction="row"
            >
                <Stack
                    sx={{
                        borderRadius: "4px",
                        backgroundColor: "#ffffffff",
                        flexGrow: "1",
                        alignItems: "center",
                        border: "solid 1px #e8ebf1",
                        padding: "6px 10px",
                    }}
                    spacing="10px"
                    direction="row"
                >
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNjEyLjAxIDYxMi4wMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTYwNi4yMDkgNTc4LjcxNCA0NDguMTk4IDQyMy4yMjhDNDg5LjU3NiAzNzguMjcyIDUxNSAzMTguODE3IDUxNSAyNTMuMzkzIDUxNC45OCAxMTMuNDM5IDM5OS43MDQgMCAyNTcuNDkzIDBTLjAwNiAxMTMuNDM5LjAwNiAyNTMuMzkzczExNS4yNzYgMjUzLjM5MyAyNTcuNDg3IDI1My4zOTNjNjEuNDQ1IDAgMTE3LjgwMS0yMS4yNTMgMTYyLjA2OC01Ni41ODZsMTU4LjYyNCAxNTYuMDk5YzcuNzI5IDcuNjE0IDIwLjI3NyA3LjYxNCAyOC4wMDYgMGExOS4yOTEgMTkuMjkxIDAgMCAwIC4wMTgtMjcuNTg1ek0yNTcuNDkzIDQ2Ny44Yy0xMjAuMzI2IDAtMjE3Ljg2OS05NS45OTMtMjE3Ljg2OS0yMTQuNDA3UzEzNy4xNjcgMzguOTg2IDI1Ny40OTMgMzguOTg2YzEyMC4zMjcgMCAyMTcuODY5IDk1Ljk5MyAyMTcuODY5IDIxNC40MDdTMzc3LjgyIDQ2Ny44IDI1Ny40OTMgNDY3Ljh6IiBmaWxsPSIjODI4ODlhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                        width="14px"
                        height="14px"
                    />
                    <Input
                        sx={{
                            border: "none",
                            width: "95%",
                            fontSize: "14px",
                            backgroundColor: "transparent",
                            padding: "1px 2px",
                            borderRadius: "4px",
                            outline: "none",
                        }}
                        placeholder="Search"
                        type="text"
                        disableUnderline
                    ></Input>
                </Stack>
                <FormControl size="small">
                    <Select
                        sx={{
                            backgroundColor: "#2567f4",
                            border: "none",
                            color: "#ffffffff",
                            padding: "8px",
                            width: "fit-content",
                            fontSize: "13px",
                            fontWeight: "600",
                            borderRadius: "5px",
                        }}
                    >
                        <OptionItem>Create</OptionItem>
                        <OptionItem>User</OptionItem>
                        <OptionItem>Course</OptionItem>
                        <OptionItem>Path</OptionItem>
                        <OptionItem>Group</OptionItem>
                    </Select>
                </FormControl>
                <Avatar
                    sx={{
                        backgroundColor: "#2567f4",
                        color: "#ffffffff",
                        width: "33px",
                        height: "33px",
                        fontSize: "14px",
                        " @media(max-width:991px)": {
                            fontSize: "12px",
                            width: "28px",
                            height: "28px",
                            flexShrink: "0",
                        },
                        " @media(max-width:479px)": {
                            height: "28px",
                            width: "28px",
                            fontSize: "12px",
                            flexShrink: "0",
                        },
                    }}
                />
            </Stack>
        </Box>
    );
}
