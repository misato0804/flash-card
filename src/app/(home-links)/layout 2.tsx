import Header from "@/components/header";
import LayoutSpacer from "@/components/wrapper/LayoutSpacer";
import Footer from "@/components/footer";

export default function HomeLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header/>
            <LayoutSpacer>
                {children}
                <Footer/>
            </LayoutSpacer>
        </div>
    );
}
