import { Header } from "./components/header";
import { ProfileCard } from "./components/ProfileCard";
import { Footer } from "./components/footer";

export default function App() {
    const people = {
        nome: "João Silva",
        bio: "“Entusiasta da tecnologia e desenvolvimento web.”",
        src: "https://img.freepik.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66590.jpg",
    };

    return (
        <>
            <Header />
            <ProfileCard people={people} />
            <Footer />
        </>
    );
}
