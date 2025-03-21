import { alpha, AppBar, Box, Button, Container, createTheme, styled, Toolbar, type Shadows } from "@mui/material";
import Sitemark from './SitemarkIcon';

const borderRadius = 8


export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)',
};

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

const StyledToolbar = styled(Toolbar)(({  }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: alpha(gray[300], 0.4),
  backgroundColor: alpha('hsl(0, 0%, 99%)', 0.4),
  boxShadow: customShadows[1],
  padding: '8px 12px',
}));


export default function Header() {
  return (
    <AppBar
    // position="fixed"
    enableColorOnDark
    sx={{
      boxShadow: 0,
      bgcolor: 'transparent',
      backgroundImage: 'none',
      mt: 'calc(var(--template-frame-height, 0px) + 28px)',
    }}
  >
    <Container maxWidth="lg">
      <StyledToolbar variant="dense" disableGutters>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
          <Sitemark />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant="text" color="info" size="small">
              Features
            </Button>
            <Button variant="text" color="info" size="small">
              Testimonials
            </Button>
            <Button variant="text" color="info" size="small">
              Highlights
            </Button>
            <Button variant="text" color="info" size="small">
              Pricing
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              FAQ
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              Blog
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          <Button color="primary" variant="text" size="small">
            Sign in
          </Button>
          <Button color="primary" variant="contained" size="small">
            Sign up
          </Button>
          {/* <ColorModeIconDropdown /> */}
        </Box>
        {/* <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
        </Box> */}
      </StyledToolbar>
    </Container>
  </AppBar>
  );
}