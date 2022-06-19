import Header from "./header";
import Footer from "./footer";
export default function Layout({ children }) {
    return (
        <>
            {/* 헤더부분 */}
            <Header />

            <div>{children}</div>

            {/* 푸터부분 */}
            <Footer />
        </>
    );
}
