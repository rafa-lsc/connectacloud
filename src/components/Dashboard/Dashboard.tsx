import { mockServices } from "../../data/mock-services";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Dashboard.module.css";
import { Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.barraPesquisa}>
        <input type="text" placeholder="Pesquisar..." className={styles.input} />
        <span>
          <Search />
        </span>
      </div>

      <div className={styles.cardsContainer}>
      {mockServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
      </div>

    </div>
  );
}
