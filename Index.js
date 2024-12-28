function coffeeMachine() {
	let commandeConfirmee = false;

	function askQuestion(question, reponsesValides) {
		let reponse;
		do {
			reponse = prompt(question).toLowerCase();
			if (!reponsesValides.includes(reponse)) {
				alert(
					`Veuillez entrer une réponse valide parmi : ${reponsesValides.join(", ")}`,
				);
			}
		} while (!reponsesValides.includes(reponse));
		return reponse;
	}

	while (!commandeConfirmee) {
		const boisson = askQuestion("Thé ou café ? (tapez 'thé' ou 'café')", [
			"thé",
			"café",
		]);

		let sucre = askQuestion("Voulez-vous du sucre ? (oui/non)", ["oui", "non"]);
		sucre = sucre === "oui" ? "avec sucre" : "sans sucre";

		let lait = askQuestion("Voulez-vous du lait ? (oui/non)", ["oui", "non"]);
		if (lait === "oui") {
			let vegetal = askQuestion("Voulez-vous du lait végétal ? (oui/non)", [
				"oui",
				"non",
			]);
			lait = vegetal === "oui" ? "lait végétal" : "lait de vache";
		} else {
			lait = "sans lait";
		}

		const commande = `${boisson}, ${sucre}, ${lait}`;
		const confirmation = askQuestion(
			`Votre commande est : ${commande}. Confirmez-vous ? (oui/non)`,
			["oui", "non"],
		);

		if (confirmation === "oui") {
			commandeConfirmee = true;
			alert(
				`Commande confirmée : ${commande}. Votre boisson sera prête bientôt !`,
			);
		} else {
			alert("Recommençons la commande...");
		}
	}
}

coffeeMachine();
