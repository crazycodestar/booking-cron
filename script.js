const cron = require("node-cron");
const fetch = require("node-fetch");

async function runAudit() {
	console.log("Cron job executed at:", new Date().toLocaleString());
	try {
		fetch("http://localhost:3000/api/cron");
	} catch (err) {
		console.log("error: ", err);
	}
}

cron.schedule("*/30 * * * *", () => {
	runAudit();
});
