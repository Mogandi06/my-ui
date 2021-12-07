import React from 'react'
import { Card, CardHeader, IconButton, CardMedia, Typography, CardContent, Rating } from '@mui/material'
import { Box } from '@mui/system'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CardsContent(props) {
    return (
        <Card sx={{
            maxWidth: 350,
            bgcolor: '#F4F4F2',
            m: 1
        }}>
            <CardHeader
                avatar={
                    <Box sx={{
                        bgcolor: '#E0DEDE',
                        width: 60,
                        height: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#495464',
                        borderRadius: 1
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: 10
                        }}>
                            NEW
                        </Typography>

                    </Box>
                }
                action={
                    <>
                        <IconButton>
                            <FormatListBulletedIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </>
                } />
            <CardMedia
                component="img"
                // height="465"
                image={props.foto}
                alt="item"
            />
            <CardContent>
                <Typography variant="h6" sx={{
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    mt: 0,
                    mb: 2
                }}>
                    {props.nama}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Rating name="read-only" value={props.rating} readOnly precision={0.5} />

                    <Box sx={{
                        borderRadius: 1,
                        border: '1px solid #E0DEDE',
                        // borderColor: '#495464',
                        width: 160,
                        display: 'flex',
                        justifyContent: 'center'

                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            color: '#495464'
                        }}>
                            Rp. {props.price} |
                            <ShoppingCartIcon fontSize="small" sx={{ ml: 0.4 }} />
                        </Typography>

                    </Box>
                </Box>

            </CardContent>

        </Card>
    )
}
