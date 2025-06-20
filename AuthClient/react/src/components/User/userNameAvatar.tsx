import { Avatar, Box, Stack, Typography } from "@mui/material"
import { getUserNameByToken } from "../store/getFromToken";
const UserNameAvatar=()=>{

  const  userName=getUserNameByToken()
    function stringAvatar(name: string) {
        console.log(userName);
        
        return {
            sx: {
                bgcolor: 'rgb(4, 213, 151)',
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }
return(<>
 <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
            <Stack direction="row" spacing={2}>
                <Avatar {...stringAvatar(userName)} />
                <Typography variant="h4">
                    Hi {userName}!
                </Typography>
               
            </Stack>
        </Box>
</>)
}
export default UserNameAvatar