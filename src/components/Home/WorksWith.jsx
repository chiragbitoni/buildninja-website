import styles from "./WorksWith.module.css";

const tools = [
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Google",
    "Microsoft Azure AD",
    "Docker",
    "Kubernetes",
    "SSH",
    "Command Line",
    "Script Runner",
    "MSBuild",
    "VSTest"
];

export default function WorksWith() {
    return (
        <div className={styles.socialStrip}>
            <p className={styles.label}>Works seamlessly with your stack</p>
            <div className={styles.logos}>
                {tools.map((tool) => (
                    <div key={tool} className={styles.logoChip}>
                        {tool}
                    </div>
                ))}
            </div>
        </div>
    );
}