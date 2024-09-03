import { useState } from 'react';
import './App.css';
import {
  Button, TextField, AppBar, Toolbar, IconButton, Typography, Grid,
  Card, CardContent, CardMedia, Box, Menu, MenuItem, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Rating, Container, useMediaQuery, Select, FormControl, InputLabel
} from '@mui/material';
import {
  Menu as MenuIcon, AccountCircle, Home as HomeIcon, Work as WorkIcon,
  Person as PersonIcon, Settings as SettingsIcon, Star as StarIcon, Language as LanguageIcon
} from '@mui/icons-material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import tovaLogo from './assets/tova-logo.png';
import lalivesLogo from './assets/lalives-logo.png';
import foundersIcon from './assets/founders.png';
import techExpertIcon from './assets/tech-expert.png';
import medicalExpertIcon from './assets/medical-expert.png';
import ceosManagementIcon from './assets/ceo.png';
import investorIcon from './assets/investor.png';
import entertainmentSportsIcon from './assets/entertainment.png';
import scientistInnovatorIcon from './assets/scientist.png';
import researchLeadIcon from './assets/research.png';

const theme = createTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' },
    background: { default: '#f5f5f5' },
  },
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': { transform: 'translateY(-5px)' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '25px', textTransform: 'none' },
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { padding: '12px' } },
    },
    MuiSvgIcon: {
      styleOverrides: { root: { fontSize: '2rem' } },
    },
  },
});

const drawerItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Work', icon: <WorkIcon /> },
  { text: 'Personal', icon: <PersonIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
];

const categories = [
  { name: 'Founders', icon: foundersIcon },
  { name: 'Tech Expert & Hacker Geek', icon: techExpertIcon },
  { name: 'Medical Expert', icon: medicalExpertIcon },
  { name: 'CEOs & Management', icon: ceosManagementIcon },
  { name: 'Investor', icon: investorIcon },
  { name: 'Entertainment & Sports', icon: entertainmentSportsIcon },
  { name: 'Scientist & Innovator', icon: scientistInnovatorIcon },
  { name: 'Research Lead & Top Scholar', icon: researchLeadIcon },
];

const profiles = [
  { name: 'John Doe', location: 'New York, USA', rating: 4.5, description: 'Expert in AI and Machine Learning', rate: 100 },
  { name: 'Jane Smith', location: 'London, UK', rating: 4.7, description: 'Specialist in Blockchain Technology', rate: 120 },
  { name: 'Michael Brown', location: 'San Francisco, USA', rating: 4.6, description: 'Cybersecurity Professional', rate: 110 },
  { name: 'Emily White', location: 'Toronto, Canada', rating: 4.8, description: 'Data Science Consultant', rate: 130 },
  { name: 'Chris Green', location: 'Paris, France', rating: 4.4, description: 'UX/UI Design Expert', rate: 90 },
  { name: 'Anna Blue', location: 'Berlin, Germany', rating: 4.6, description: 'Full Stack Developer', rate: 95 },
  { name: 'David Black', location: 'Rome, Italy', rating: 4.7, description: 'Cloud Architecture Specialist', rate: 105 },
  { name: 'Laura Red', location: 'Madrid, Spain', rating: 4.5, description: 'Mobile App Developer', rate: 100 },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('work');
  const [who, setWho] = useState('');
  const [what, setWhat] = useState('');
  const [where, setWhere] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleWhoChange = (event) => setWho(event.target.value);
  const handleWhatChange = (event) => setWhat(event.target.value);
  const handleWhereChange = (event) => setWhere(event.target.value);
  const handleSectionChange = (section) => setActiveSection(section);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    // Implement logout logic here
    handleMenuClose();
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    handleMenuClose();
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const translate = (text) => {
    const translations = {
      en: {
        'Tova AI': 'Tova AI',
        'Work': 'Work',
        'Personal': 'Personal',
        'Search by name': 'Search by name',
        'Search': 'Search',
        'Who': 'Who',
        'What': 'What',
        'Where': 'Where',
        'View Profile': 'View Profile',
        'Profile': 'Profile',
        'Logout': 'Logout',
        'Language': 'Language',
      },
      zh: {
        'Tova AI': 'Tova AI',
        'Work': '工作',
        'Personal': '个人',
        'Search by name': '按名称搜索',
        'Search': '搜索',
        'Who': '谁',
        'What': '什么',
        'Where': '哪里',
        'View Profile': '查看资料',
        'Profile': '个人资料',
        'Logout': '登出',
        'Language': '语言',
      },
    };
    return translations[language][text] || text;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', width: '100vw' }}>
        <AppBar position="relative" color="transparent" elevation={0}>
          <Toolbar sx={{ backgroundColor: 'white', flexWrap: 'wrap' }}>
            <Box component="img" src={tovaLogo} alt="Tova AI" sx={{ height: 40, mr: 2 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}>
              {translate('Tova AI')}
            </Typography>
            {!isMobile && (
              <Box component="img" src={lalivesLogo} alt="LA Lives" sx={{ height: 40, mr: 2 }} />
            )}
            <Box className="user-menu">
              <IconButton color="primary" onClick={handleMenuOpen}>
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>{translate('Profile')}</MenuItem>
                <MenuItem onClick={handleLogout}>{translate('Logout')}</MenuItem>
                <MenuItem>
                  <FormControl fullWidth>
                    <InputLabel id="language-select-label">{translate('Language')}</InputLabel>
                    <Select
                      labelId="language-select-label"
                      id="language-select"
                      value={language}
                      label={translate('Language')}
                      onChange={handleLanguageChange}
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="zh">中文</MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>
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
              {drawerItems.map((item) => (
                <ListItem key={item.text}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={translate(item.text)} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', mt: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap' }}>
              {['work', 'personal'].map((section) => (
                <Button 
                  key={section}
                  variant={activeSection === section ? 'contained' : 'outlined'} 
                  color="primary" 
                  onClick={() => handleSectionChange(section)}
                  sx={{ mr: section === 'work' ? { xs: 0, sm: 2 } : 0, mb: { xs: 1, sm: 0 }, fontSize: '1.2rem', padding: '10px 30px', width: { xs: '100%', sm: 'auto' } }}
                >
                  {translate(section.charAt(0).toUpperCase() + section.slice(1))}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap' }}>
              {activeSection === 'work' ? (
                <>
                  <TextField
                    label={translate('Search by name')}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    variant="outlined"
                    sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 }, width: { xs: '100%', sm: '300px' } }}
                  />
                  <Button variant="contained" color="primary" sx={{ width: { xs: '100%', sm: 'auto' } }}>{translate('Search')}</Button>
                </>
              ) : (
                <>
                  {['Who', 'What', 'Where'].map((field) => (
                    <TextField
                      key={field}
                      label={translate(field)}
                      value={field === 'Who' ? who : field === 'What' ? what : where}
                      onChange={field === 'Who' ? handleWhoChange : field === 'What' ? handleWhatChange : handleWhereChange}
                      variant="outlined"
                      sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 }, width: { xs: '100%', sm: '200px' } }}
                    />
                  ))}
                  <Button variant="contained" color="primary" sx={{ width: { xs: '100%', sm: 'auto' } }}>{translate('Search')}</Button>
                </>
              )}
            </Box>
            <Box component="main" sx={{display: 'flex'}}>
              <Box className="work-section" sx={{ width: '100%', px: 2 }}>
                <Grid container spacing={2} sx={{ mb: 6, justifyContent: 'center' }}>
                  {categories.map((category, index) => (
                    <Grid item xs={6} sm={3} md={1.5} key={index}>
                      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <CardMedia component="img" alt={category.name} image={category.icon} sx={{ width: 40, height: 40, mb: 1 }} />
                        <CardContent sx={{ p: 0 }}>
                          <Typography variant="caption" color="text.secondary" component="p" align="center">{translate(category.name)}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Grid container spacing={2}>
                  {profiles.map((profile, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', alignItems: 'center' }}>
                          <StarIcon color="primary" />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>{profile.rating.toFixed(1)}</Typography>
                        </Box>
                        <CardContent>
                          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>{profile.name}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{profile.location}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{translate(profile.description)}</Typography>
                          <Typography variant="body2" color="text.secondary">Rate: ${profile.rate}/hr</Typography>
                        </CardContent>
                        <Box sx={{ p: 2 }}>
                          <Button variant="outlined" color="primary" fullWidth>{translate('View Profile')}</Button>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
