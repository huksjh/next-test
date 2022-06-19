import Header from "./header";
import Footer from "./footer";
export default function Layout({ children }) {
    return (
        <>
            {/* 헤더 */}
            <Header />

            <div>{children}</div>

            {/* 푸터 */}
            <Footer />
        </>
    );
}
