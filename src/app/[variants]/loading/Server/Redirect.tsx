"use client";

import { useRouter } from "next/navigation";
import { memo, useEffect } from "react";

import { AppLoadingStage } from "../stage";

interface RedirectProps {
	setLoadingStage: (value: AppLoadingStage) => void;
}

const Redirect = memo<RedirectProps>(({ setLoadingStage }) => {
	const router = useRouter();

	const navToChat = () => {
		setLoadingStage(AppLoadingStage.GoToChat);
		router.replace("/chat");
	};

	useEffect(() => {
		// finally go to chat
		navToChat();
	}, []);

	return null;
});

export default Redirect;
