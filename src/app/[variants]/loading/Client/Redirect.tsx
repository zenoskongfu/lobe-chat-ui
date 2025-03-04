"use client";

import { useRouter } from "next/navigation";
import { memo, useEffect } from "react";

import { AppLoadingStage } from "../stage";

interface RedirectProps {
	setActiveStage: (value: AppLoadingStage) => void;
}

const Redirect = memo<RedirectProps>(({ setActiveStage }) => {
	const router = useRouter();

	const navToChat = () => {
		setActiveStage(AppLoadingStage.GoToChat);
		router.replace("/chat");
	};

	useEffect(() => {
		// finally check the conversation status
		navToChat();
	}, []);

	return null;
});

export default Redirect;
