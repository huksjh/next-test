import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle";
export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">넥스트 포트폴리오</span>
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/">
                        <a className="mr-5 hover:text-gray-900">홈</a>
                    </Link>
                    <Link href="/projects">
                        <a className="mr-5 hover:text-gray-900">프로젝트</a>
                    </Link>
                    <Link href="/">
                        <a className="mr-5 hover:text-gray-900">연락하기</a>
                    </Link>
                </nav>
                <DarkModeToggleButton />
            </div>
        </header>
    );
}
