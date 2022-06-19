import Link from "next/link";

export default function Hero() {
    return (
        <>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                포트포리오 만들기
                <br className="hidden lg:inline-block" />
                오늘도 빡코딩!
            </h1>
            <p className="mb-8 leading-relaxed">
                품에 만물은 실현에 못하다 힘차게 우리 보배를 보라. 얼마나 밝은 붙잡아 역사를 쓸쓸하랴? 커다란 그림자는 속에서 인생을 산야에 피고, 풀밭에 이것이다. 커다란 피어나는 어디 구하지 것은 그러므로 산야에 있으랴? 봄바람을 것이다.보라, 군영과 부패를 것이다. 주며, 이상의 이상, 구하지
                교향악이다. 위하여, 우리 이 보는 할지니, 가는 피부가 싹이 것이다. 인생을 눈에 어디 이것이야말로 따뜻한 희망의 것은 되는 이것이다. 동산에는 굳세게 끝까지 피부가 때까지 반짝이는 긴지라 쓸쓸하랴? 오직 그들의 아니더면, 가는 군영과 이상은 것이다. 청춘은 싸인 기쁘며, 아니다.
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</a>
                </Link>
            </div>
        </>
    );
}
