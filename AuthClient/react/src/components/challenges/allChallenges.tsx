import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getChallenges } from "../redux/challengeSlice";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import LockIcon from "@mui/icons-material/Lock";

const AllChallenges = () => {
    const dispatch = useDispatch<AppDispatch>();
    const challengesList = useSelector((state: RootState) => state.challenges.list);
    const navigate = useNavigate();
    const currentDate = new Date();
    const sortedChallenges = [...challengesList].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

    useEffect(() => {
        dispatch(getChallenges());
    }, [dispatch]);

    const handleNavigate = (challengeId: number) => {
        navigate(`/allChallenges/${challengeId}`);
    };
    const formatDate = (date: string | Date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear();

        return `${day}-${month}-${year}`;
    };
    return (
        <>
            <Box sx={{ display: "flex", width: "100%", height: "100vh", gap: 4, padding: 2, marginTop: '50px' }}>
                <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 3, padding: 3 }}>
                    {Array.isArray(sortedChallenges) && sortedChallenges.length > 0 ? (
                        sortedChallenges.map((challenge) => {
                            const isExpired = new Date(challenge.endDate) < currentDate;
                            return (
                                <Card
                                    key={challenge.id}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 3,
                                        cursor: "pointer",
                                        borderRadius: 2,
                                        border: "0.5px solid",
                                        borderColor: "rgba(255, 168, 197, 0.8)",
                                        boxShadow: 3,
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        ":hover": {
                                            boxShadow: 10,
                                            transform: "scale(1.05)",
                                        },
                                        ":active": {
                                            transform: "scale(1.03)",
                                        },
                                        maxWidth: "100%",
                                        justifyContent: "space-between",
                                        position: "relative"
                                    }}
                                    onClick={() => handleNavigate(challenge.id)}
                                >
                                    {isExpired && (
                                        <LockIcon
                                            sx={{
                                                position: "absolute",
                                                top: 10,
                                                right: 10,
                                                color: "rgba(138, 140, 255, 0.8)",
                                                fontSize: 40,
                                            }}
                                        />
                                    )}
                                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Avatar src="/assets/profile.jpg" alt="Avatar" />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "rgba(255, 64, 129, 0.8)" }}>
                                                {challenge.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    overflow: "hidden",
                                                    whiteSpace: "nowrap",
                                                    textOverflow: "ellipsis",
                                                    maxWidth: "300px",
                                                }}
                                            >
                                                {challenge.description}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: "inline",
                                                fontWeight: 'bold',
                                            }}>
                                            From:
                                        </Typography>
                                        {formatDate(challenge.startDate.toString())}
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                display: "inline",
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Till:
                                        </Typography>
                                        {formatDate(challenge.endDate.toString())}

                                    </CardContent>
                                </Card>
                            );
                        })
                    ) : (
                        <Typography sx={{ padding: 2 }}>No challenges available.</Typography>
                    )}
                </Box>
                {/* <Box
                    sx={{
                        flex: 1,
                        padding: 3,
                        backgroundColor: "#9c27b0",
                        borderRadius: 2,
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%"
                    }}
                > */}
                {/* <Box sx={{ flex: 1, overflow: "hidden", borderRadius: 2 }}>
                        <Slider
                            sx={{
                                width: "100%",
                                "& .MuiSlider-thumb": {
                                    display: "none",
                                },
                            }}
                            value={0}
                            min={0}
                            max={5}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => (
                                <img
                                    src={`../../../public/assets/brain.png`}
                                    alt={`Image ${value}`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                />
                            )}
                        />
                    </Box>
    
                    <Paper sx={{ padding: 3, textAlign: "center", backgroundColor: "#f1f1f1", color: "#9c27b0", borderRadius: 2 }}>
                        <Typography variant="h6">
                            Come and join the fun! Take part in the next challenge!
                        </Typography>
                    </Paper>
                </Box> */}
            </Box>
            <Box>
                <Outlet />
            </Box>
        </>
    );

};

export default AllChallenges;
