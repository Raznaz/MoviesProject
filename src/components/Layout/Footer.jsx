import { Container, Box, Grid, Link } from '@mui/material';
import { Link as LinkRoute } from 'react-router-dom';
import React from 'react';

function Footer() {
	return (
		<footer>
			<Box bgcolor="#15528f" color="white">
				<Container maxWidth="lg">
					<Grid container spacing={5} sx={{ pb: 4, mt: 2 }}>
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
									to="/movie/999"
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
									to="/movie/999"
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
									to="/movie/999"
									color="inherit"
								>
									MovieById
								</Link>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
}

export default Footer;
