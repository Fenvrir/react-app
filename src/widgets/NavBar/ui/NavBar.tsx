import { Link } from "react-router-dom"
import styles from "./NavBar.module.scss"
import { classNames } from "@/shared/lib/className"
import { AppLink } from "@/shared"

interface NavBarProps {
	className?: string
}

export const NavBar = ({ className = "" }: NavBarProps) => {
	return (
		<div className={classNames(styles.NavBar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme="secondary" to={`/`}>Main</AppLink>
				<AppLink to={`/about`}>About</AppLink>
				<AppLink to={`/asdsa`}>Fake</AppLink>
			</div>
		</div>
	)
}
