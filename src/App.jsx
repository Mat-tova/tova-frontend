import { useState } from 'react'
import './App.css'
import { Button, TextField, AppBar, Toolbar, IconButton, Typography, Container, Grid as Grid2, Card, CardContent, CardMedia, Box, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import tovaLogo from './assets/tova-logo.png'
import lalivesLogo from './assets/lalives.png'
import foundersIcon from './assets/founders.png'
import techExpertIcon from './assets/tech-expert.png'
import medicalExpertIcon from './assets/medical-expert.png'
import ceosManagementIcon from './assets/ceo.png'
import investorIcon from './assets/investor.png'
import entertainmentSportsIcon from './assets/entertainment.png'
import scientistInnovatorIcon from './assets/scientist.png'
import researchLeadIcon from './assets/research.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '12px',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
        },
      },
    },
  },
})

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSection, setActiveSection] = useState('work')
  const [who, setWho] = useState('')
  const [what, setWhat] = useState('')
  const [where, setWhere] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleWhoChange = (event) => {
    setWho(event.target.value)
  }

  const handleWhatChange = (event) => {
    setWhat(event.target.value)
  }

  const handleWhereChange = (event) => {
    setWhere(event.target.value)
  }

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    // Implement logout logic here
    handleMenuClose()
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  const drawerItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Work', icon: <WorkIcon /> },
    { text: 'Personal', icon: <PersonIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ]

  const categories = [
    { name: 'Founders', icon: foundersIcon },
    { name: 'Tech Expert & Hacker Geek', icon: techExpertIcon },
    { name: 'Medical Expert', icon: medicalExpertIcon },
    { name: 'CEOs & Management', icon: ceosManagementIcon },
    { name: 'Investor', icon: investorIcon },
    { name: 'Entertainment & Sports', icon: entertainmentSportsIcon },
    { name: 'Scientist & Innovator', icon: scientistInnovatorIcon },
    { name: 'Research Lead & Top Scholar', icon: researchLeadIcon },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', width: '100vw' }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ backgroundColor: 'white' }}>
            <Box component="img" src={tovaLogo} alt="Tova AI" sx={{ height: 40, mr: 2 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}>
              Tova AI
            </Typography>
            <Box component="img" src={lalivesLogo} alt="LA Lives" sx={{ height: 40, mr: 2 }} />
            <Box className="user-menu">
              <IconButton color="primary" onClick={handleMenuOpen}>
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {drawerItems.map((item, index) => (
                <ListItem button key={item.text}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box sx={{ width: '100%', mt: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button 
              variant={activeSection === 'work' ? 'contained' : 'outlined'} 
              color="primary" 
              onClick={() => handleSectionChange('work')}
              sx={{ mr: 2, fontSize: '1.2rem', padding: '10px 30px' }}
            >
              Work
            </Button>
            <Button 
              variant={activeSection === 'personal' ? 'contained' : 'outlined'} 
              color="primary" 
              onClick={() => handleSectionChange('personal')}
              sx={{ fontSize: '1.2rem', padding: '10px 30px' }}
            >
              Personal
            </Button>
          </Box>
          {activeSection === 'work' ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <TextField
                label="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
                variant="outlined"
                sx={{ mr: 2, width: '300px' }}
              />
              <Button variant="contained" color="primary">Search</Button>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <TextField
                label="Who"
                value={who}
                onChange={handleWhoChange}
                variant="outlined"
                sx={{ mr: 2, width: '200px' }}
              />
              <TextField
                label="What"
                value={what}
                onChange={handleWhatChange}
                variant="outlined"
                sx={{ mr: 2, width: '200px' }}
              />
              <TextField
                label="Where"
                value={where}
                onChange={handleWhereChange}
                variant="outlined"
                sx={{ mr: 2, width: '200px' }}
              />
              <Button variant="contained" color="primary">Search</Button>
            </Box>
          )}
          <Box component="main" sx={{ width: '100%' }}>
            <Box className="work-section" sx={{ width: '100%', px: 2 }}>
              <Grid2 container spacing={4} sx={{ mb: 6, justifyContent: 'center' }}>
                {categories.map((category, index) => (
                  <Grid2 xs={6} sm={3} md={1.5} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1 }}>
                      <CardMedia component="img" alt={category.name} image={category.icon} sx={{ width: 40, height: 40, mb: 1 }} />
                      <CardContent sx={{ p: 0 }}>
                        <Typography variant="caption" color="text.secondary" component="p" align="center">{category.name}</Typography>
                      </CardContent>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
              <Grid2 container spacing={1}>
                {[
                  { name: 'John Doe', location: 'New York, USA', rating: 4.5, description: 'Expert in AI and Machine Learning', rate: 100 },
                  { name: 'Jane Smith', location: 'London, UK', rating: 4.7, description: 'Specialist in Blockchain Technology', rate: 120 },
                  { name: 'Michael Brown', location: 'San Francisco, USA', rating: 4.6, description: 'Cybersecurity Professional', rate: 110 },
                  { name: 'Emily White', location: 'Toronto, Canada', rating: 4.8, description: 'Data Science Consultant', rate: 130 },
                  { name: 'Chris Green', location: 'Paris, France', rating: 4.4, description: 'UX/UI Design Expert', rate: 90 },
                  { name: 'Anna Blue', location: 'Berlin, Germany', rating: 4.6, description: 'Full Stack Developer', rate: 95 },
                  { name: 'David Black', location: 'Rome, Italy', rating: 4.7, description: 'Cloud Architecture Specialist', rate: 105 },
                  { name: 'Laura Red', location: 'Madrid, Spain', rating: 4.5, description: 'Mobile App Developer', rate: 100 },
                ].map((profile, index) => (
                  <Grid2 xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>{profile.name}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{profile.location}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Rating: {profile.rating}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{profile.description}</Typography>
                        <Typography variant="body2" color="text.secondary">Rate: ${profile.rate}/hr</Typography>
                      </CardContent>
                      <Box sx={{ p: 2 }}>
                        <Button variant="outlined" color="primary" fullWidth>View Profile</Button>
                      </Box>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
