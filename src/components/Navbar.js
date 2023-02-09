import * as React from 'react'
import logo from '../assets/logo.png'
import { BiWorld, BiUser } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import Stack from '@mui/material/Stack'

import './style.css'

const Navbar = () => {
  return (
    <div className='border-b sticky top-0 z-50 bg-white/[95%]  '>
      <div className='flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 '>
        {/* Left */}
        <div className='  h-10  flex'>
          <img src={logo} />
        </div>
        {/* Middle */}
        <div className='hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full '>
          <div>
            <ButtonGroup variant='text' aria-label='text button group'>
              <Button>Anywhere</Button>
              <Button>Any week</Button>
              <Button>Add guests</Button>
            </ButtonGroup>
          </div>

          <div className='bg-[#ff5a60] p-2 rounded-full mr-2'>
            <FiSearch className='text-white w-full' />
          </div>
        </div>
        {/* Right */}
        <Stack direction='row'>
          <Button>Airbnb your home</Button>
        </Stack>

        <div className='flex items-center border px-3 py-2 rounded-full gap-2   font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out'>
          <BiUser className='text-[22px]' />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Tooltip title='Account settings'>
              <IconButton size='small' sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Navbar
