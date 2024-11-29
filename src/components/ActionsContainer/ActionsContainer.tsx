import { Actions, Resources, ResourceType } from "../../type";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ActionsContainer.module.css";

interface ActionsContainerProps {
    resources: Resources;
    setResources: React.Dispatch<React.SetStateAction<Resources>>;
}

export default function ActionsContainer({
    resources,
    setResources,
}: ActionsContainerProps) {
    const actions: Actions = {
        chopWood: {
            name: "Cortar Madeira",
            icon: "🪓",
            trades: [{ resourceType: ResourceType.wood, amount: +1 }],
        },
        sellWood: {
            name: "Vender Madeira",
            icon: "💰",
            trades: [
                { resourceType: ResourceType.wood, amount: -1 },
                { resourceType: ResourceType.coin, amount: +1 },
            ],
        },
    };

    return (
        <section className={styles.container}>
            <div className={styles.group}>
                <ActionButton
                    action={actions.chopWood}
                    resources={resources}
                    setResources={setResources}
                />
                <ActionButton
                    action={actions.sellWood}
                    resources={resources}
                    setResources={setResources}
                />
            </div>
        </section>
    );
}