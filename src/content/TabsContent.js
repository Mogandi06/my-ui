import React from 'react'
import { Autocomplete, Box, Tab, Tabs, TextField } from '@mui/material'

const option = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
]
export default function TabsContent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    }
    return (
        <Box sx={{
            width: '100%',
            bgcolor: '#F4F4F2',
            mt: 2,
            borderRadius: 2,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={option}
                sx={{ width: 100, pb: 2, pl: 3 }}
                renderInput={(params) => <TextField {...params} label="ALL TYPES"
                    variant="standard"
                />}
            />
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Popular Products" />
                <Tab label="Low Price" />
                <Tab label="High Price" />
            </Tabs>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={option}
                sx={{ width: 100, pb: 2, pr: 3 }}
                renderInput={(params) => <TextField {...params} label="PRICE"
                    variant="standard"
                />}
            />

        </Box>
    )
}
