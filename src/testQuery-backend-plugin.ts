
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

// Hello World command
const command: theia.Command = {
    id: 'simple-command',
    label: 'Hello World command'
};

export function start(context: theia.PluginContext) {
    console.log(">>>>>>>>>>>>>", theia.env.getQueryParameters());

    context.subscriptions.push(
        theia.commands.registerCommand(command, (...args: any[]) => {
            console.log(`Hello World command handler was called with arguments: `, args);
        }));

    context.subscriptions.push(
        theia.commands.registerCommand({
            id: "terminal-created-with-help-args",
            label: "Create terminal with help arguments",
        },
            (...args: any[]) => {
                const terminal = theia.window.createTerminal("Sh Terminal", "sh", ["-l"]);
                terminal.show();
            })
    );

    context.subscriptions.push(
        theia.commands.registerCommand({
            id: "terminal-created-with-help-options",
            label: "Create terminal with help options",
        },
            (...args: any[]) => {
                const termOptions: theia.TerminalOptions = {
                    name: "Test terminal",
                    shellPath: "/bin/bash",
                    shellArgs: ["-l"],
                    env: { "HELLO": "Hello Theia.", "GO": null },
                    // cwd: "/home/user/projects/theia" // any existed absolute path or url to the folder
                };

                (termOptions as any)["attributes"] = { "CHE_MACHINE_NAME": "machine-exec" }
                console.log("options ;) ", termOptions);
                const terminal = theia.window.createTerminal(termOptions);
                terminal.show();
            })
    );

    context.subscriptions.push(
        theia.commands.registerCommand({
            id: "send-text-to-the-terminal",
            label: "Send text to the terminal",
        },
            (...args: any[]) => {
                const terminal = createTerminalWithOptions();
                terminal.show();
                terminal.sendText("clear && echo Theia plugin terminal.", true);
            })
    );

    context.subscriptions.push(
        theia.commands.registerCommand({
            id: "plugin-hide-terminal-panel",
            label: "Hide terminal panel after 3 sec",
        },
            async (...args: any[]) => {
                const terminal = createTerminalWithOptions();
                terminal.show();

                await sleep(3000);
                terminal.hide();
            })
    );

    context.subscriptions.push(
        theia.commands.registerCommand({
            id: "show-terminal-with-delay",
            label: "Show terminal after 3 sec",
        },
            async (...args: any[]) => {
                const terminal = createTerminalWithOptions();
                await sleep(3000);
                terminal.show();
            })
    );

    context.subscriptions.push(
        theia.commands.registerCommand({
            id: "dispose-terminal",
            label: "Dispose terminal after 3 sec",
        },
            async (...args: any[]) => {
                const terminal = createTerminalWithOptions();
                terminal.show();
                await sleep(3000);
                terminal.dispose();
            })
    );

    context.subscriptions.push(
        theia.commands.registerCommand({
            "id": "subscribe-on-did-close-terminal-event",
            "label": "Subscribe to onDidCloseTerminal event",
        },
            async (...args: any[]) => {
                const terminal = createTerminalWithOptions();
                terminal.show();

                const createTermId: number = await terminal.processId;
                theia.window.onDidCloseTerminal(async (term) => {
                    const termToCloseId = await term.processId;
                    if (termToCloseId === createTermId) {
                        console.log("Terminal closed, id: ", createTermId);
                    }
                }, createTermId);
            })
    );
}

export function stop() {
}

export function sleep(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function createTerminalWithOptions(): theia.Terminal {
    const termOptions: theia.TerminalOptions = {
        name: "Test terminal",
        shellPath: "/bin/bash"
    }
    return theia.window.createTerminal(termOptions);
}
