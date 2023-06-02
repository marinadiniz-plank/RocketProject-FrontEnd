import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
	const { t } = useTranslation();
	return (
		<Container
			sx={{
				display: "flex",
				// alignItems: 'center',
				// justifyContent: 'left',
				minHeight: "100vh",
				minWidth: "100vw",
				backgroundImage: `url("https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				color: "#fff",
			}}
		>
			<div>
				<Typography
					variant="h3"
					component="h1"
					sx={{
						textAlign: "top",
						marginLeft: 10,
						marginTop: 15,
						fontWeight: "bold",
						fontFamily: "Source Code Pro, monospace",
					}}
				>
					{t("pages.404")}
				</Typography>
				<Typography
					variant="h1"
					component="h2"
					sx={{
						fontSize: "5rem",
						textAlign: "right",
						marginLeft: 90,
						marginTop: 40,
						fontFamily: "Source Code Pro, monospace",
						fontWeight: "bold",
					}}
				>
					404
				</Typography>
			</div>
		</Container>
	);
};

export default ErrorPage;
