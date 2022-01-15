import Porta from "../components/Porta";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Porta selecionada />
            <Porta />
        </div>
    );
}
