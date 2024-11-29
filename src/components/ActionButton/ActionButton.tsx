import { Action, Resources } from "../../type";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
    action: Action;
    resources: Resources;
    setResources: React.Dispatch<React.SetStateAction<Resources>>;
}

export default function ActionButton({
    action,
    resources,
    setResources,
}: ActionButtonProps) {
    const performTrade = () => {
        console.log(`Realizando a ação: ${action.name}`);
    };

    return (
        <div className={styles.box}>
            <p className={styles.name}>{action.name}</p>
            <button className={styles.button} onClick={performTrade}>
                <span className={styles.icon}>{action.icon}</span>
            </button>
        </div>
    );
}