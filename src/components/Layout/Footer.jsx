import { Container, Box, Grid, Link } from '@mui/material';
import { Link as LinkRoute } from 'react-router-dom';
import React from 'react';

function Footer() {
	return (
		<Box
			component="footer"
			sx={{ bgcolor: 'info.main' }}
			color="text.primary"
			px={{ xs: 2, sm: 5 }}
			py={{ xs: 2, sm: 5 }}
		>
			<Container maxWidth="lg">
				<Grid container spacing={5}>
					<Grid item xs={12} sm={4}>
						<Box borderBottom={1} component="h3" variant="h3">
							Help
						</Box>
						<Box>
							<Link component={LinkRoute} to="/" color="inherit">
								Home
							</Link>
						</Box>
						<Box>
							<Link
								component={LinkRoute}
								to="/movies"
								color="inherit"
							>
								Movies
							</Link>
						</Box>
						<Box>
							<Link
								component={LinkRoute}
								to="/movie/516151"
								color="inherit"
							>
								MovieById
							</Link>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box borderBottom={1} component="h3" variant="h3">
							Account
						</Box>
						<Box>
							<Link component={LinkRoute} to="/" color="inherit">
								Home
							</Link>
						</Box>
						<Box>
							<Link
								component={LinkRoute}
								to="/movies"
								color="inherit"
							>
								Movies
							</Link>
						</Box>
						<Box>
							<Link
								component={LinkRoute}
								to="/movie/516151"
								color="inherit"
							>
								MovieById
							</Link>
						</Box>
					</Grid>

					<Grid item xs={12} sm={4}>
						<Box borderBottom={1} component="h3" variant="h3">
							Social
						</Box>
						<Box>
							<Link component={LinkRoute} to="/" color="inherit">
								Home
							</Link>
						</Box>
						<Box>
							<Link
								component={LinkRoute}
								to="/movies"
								color="inherit"
							>
								Movies
							</Link>
						</Box>
						<Box>
							<Link
								component={LinkRoute}
								to="/movie/516151"
								color="inherit"
							>
								MovieById
							</Link>
						</Box>
					</Grid>
				</Grid>
				<Box
					textAlign="center"
					pt={{ xs: 5, sm: 8 }}
					pb={{ xs: 5, sm: 0 }}
				>
					Create by Nazar 2021
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
