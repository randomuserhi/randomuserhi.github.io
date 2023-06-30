let notifications = [
    {
        link: `components/atoms/CreateSelect/index.tsx#L98`,
        title: `Error creating new option`,
        body: "&ltfail_message&gt",
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "option"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/molecules/CreateProjectForm/CreateProjectForm.tsx#L51`,
        title: `Failed to create project`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "project"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/AudioConcatenator/PromptAudio.tsx#L149`,
        title: `Error loading audio`,
        body: `Could not load the audio for prompt &quot;&ltprompt_text&gt&quot;`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "audio",
            body: `Could not load the audio for prompt "<prompt_text>"`
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: `DEPRECATED: This notification is no longer in use.`,
        link: `components/organisms/CallRecordingsTable/index.tsx#L90`,
        title: `No recording found for this call.`,
        body: ``,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "recording",
            body: "No recording found for this call."
        },
        metadata: {
            error_code: "404"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: `DEPRECATED: This notification is no longer in use.`,
        link: `components/organisms/CallRecordingsTable/index.tsx#L94`,
        title: `Error`,
        body: `&lterror&gt`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "recording",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: `DEPRECATED: This notification is no longer in use.`,
        link: `components/organisms/CallRecordingsTable/index.tsx#L101`,
        title: `Error`,
        body: `Unknown error playing call recording.`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "recording",
            body: "Unknown error playing call recording."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/Canvas/Controls.tsx#L140`,
        title: `Failed to paste nodes`,
        body: `Unable to parse and add node data.`,
        type: "user",
        status: "error",
        message: {
            action: "paste",
            sub_entity: "nodes",
            body: "Unable to parse and add node data."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/Canvas/Controls.tsx#L179`,
        title: `Node deletion failed`,
        body: `You cannot delete links.

Please deselect the following items to continue:
- ...
- ...`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "Node(s)",
            body: `You cannot delete links.

Please deselect the following items to continue:
- ...
- ...`
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/ConversationDetails/ConversationDetailsHeader.tsx#L63`,
        title: `Failed to export the recording`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "export",
            sub_entity: "recording",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/DataStoreUploadPanel/DataStoreUploadPanel.tsx#L57`,
        title: `Failed to import data`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "import",
            sub_entity: "data",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/DataStoreUploadPanel/DataStoreUploadPanel.tsx#L97`,
        title: `Problem reading JSON file`,
        body: `Message: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "file",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/DataStoreUploadPanel/DataStoreUploadPanel.tsx#L125`,
        title: `Problem reading JSON files`,
        body: `Message: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "files",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/IntentUploadPanel/IntentUploadPanel.tsx#L59`,
        title: `Failed to import data`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "import",
            sub_entity: "data",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/IntentUploadPanel/partials/FileUploader.tsx#L54`,
        title: `Incorrect file format`,
        body: `Please upload the correct file format.`,
        type: "user",
        status: "error",
        message: {
            action: "import",
            sub_entity: "file",
            body: "Incorrect file format."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/IssueReporter/IssueReporter.tsx#L75`,
        title: `There was a problem saving the report`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "save",
            sub_entity: "report",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/ProjectImportPanel/ProjectImportPanel.tsx#L44`,
        title: `Import project failed`,
        body: `Import project failed, please try again.`,
        type: "user",
        status: "error",
        message: {
            action: "import",
            sub_entity: "project",
        },
        metadata: {
            call_to_action: "Try again"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/ProjectImportPanel/partials/FileUploader.tsx#L65`,
        title: `Incorrect file format`,
        body: `Incorrect file format.`,
        type: "user",
        status: "error",
        message: {
            action: "upload",
            sub_entity: "file",
            body: "Incorrect file format."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/ProjectNavigation/Card.tsx#L108`,
        title: `Failed to duplicate the project`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "duplicate",
            sub_entity: "project",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/ProjectNavigation/Card.tsx#L132`,
        title: `Failed to delete the project`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "project",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/ProjectNavigation/Card.tsx#L178`,
        title: `Failed to export the project`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "export",
            sub_entity: "project",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/SpeechOptimisation/NLUConfiguration.tsx#L71`,
        title: `Error detected`,
        body: `Interactive node should have listen object.`,
        type: "user",
        status: "error",
        message: {
            title: "Error detected",
            body: "Interactive node should have listen object."
        },
        metadata: {
            call_to_action: "Fix now"
        },
        categories: []
    },
    {
        link: `components/organisms/UploadPanel/partials/FileUploader.tsx#L99`,
        title: `Files must be of type &ltfile_type&gt`,
        body: `The following files were of the wrong file type:
<ul>
    <li>&ltfile_name&gt:&ltfile_type&gt</li>
    <li>&ltfile_name&gt:&ltfile_type&gt</li>
</ul>`,
        type: "user",
        status: "error",
        message: {
            action: "upload",
            sub_entity: "files",
            body: "Files must be of the type <file_type>."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/qa-test/useBrokenConversations.tsx#L96`,
        title: `Failed to download xlsx`,
        body: `Failed to download conversations review xlsx.`,
        type: "user",
        status: "error",
        message: {
            action: "download",
            sub_entity: "conversation reviews"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `contexts/LockContext.tsx#L135`,
        title: `Lock error detected`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            title: "Lock error detected",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: []
    },
    {
        link: `contexts/LockContext.tsx#L173`,
        title: `Unlock error detected`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            title: "Unlock error detected",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: []
    },
    {
        link: `hooks/UseAudioDetails.tsx#L45`,
        title: `Get prompt failed`,
        body: `Failed to get prompt details for prompt id: &ltid&gt.`,
        type: "user",
        status: "error",
        message: {
            action: "get",
            sub_entity: "prompt",
            body: "Failed to get prompt details for prompt id: <id>."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioDownload.tsx#L31`,
        title: `Download failed`,
        body: `Message: Download failed

Error: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "download",
            sub_entity: "audio",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioRecorder.tsx#L71`,
        title: `No microphone permissions`,
        body: `Please grant microphone permissions to use this feature.`,
        type: "user",
        status: "error",
        message: {
            action: "record",
            sub_entity: "audio",
            body: "No microphone permissions."
        },
        metadata: {
            call_to_action: "Enable mic"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioTags.tsx#L27`,
        title: `Failed to add audio tag(s).`,
        body: `Create audio tag(s) failed.`,
        type: "user",
        status: "error",
        message: {
            action: "add",
            sub_entity: "audio tag(s)",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioTags.tsx#L46`,
        title: `Failed to delete audio tag(s).`,
        body: `Delete audio tag(s) failed.`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "audio tag(s)",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioTags.tsx#L97`,
        title: `Failed to toggle slot(s).`,
        body: `Toggle slot(s) failed.`,
        type: "user",
        status: "error",
        message: {
            action: "toggle",
            sub_entity: "slot(s)",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioTesting.tsx#L37`,
        title: `Failed to get coverage.`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "get",
            sub_entity: "coverage",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioUpload.tsx#L71`,
        title: `CSV File format is wrong`,
        body: `Should only have two columns in CSV file.`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "prompts",
            body: "Should only have two columns in CSV file."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioUpload.tsx#L81`,
        title: `CSV File format is wrong`,
        body: `There is duplicated prompts with same audio file name in your csv file.`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "prompts",
            body: "There is duplicated prompts with same audio file name in your csv file."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioUpload.tsx#L96`,
        title: `CSV File format is wrong`,
        body: `There is an empty prompt in csv file.`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "prompts",
            body: "There is an empty prompt in csv file."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useAudioUpload.tsx#L186`,
        title: `Registering audios failed`,
        body: `Registering audios failed error: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "register",
            sub_entity: "audios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useCallRecording.tsx#L42`,
        title: `There was a problem loading the conversation`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "conversation",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useConversation.tsx#L83`,
        title: `There was a problem loading the conversation`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "conversation",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useConversationMetadata.tsx#L40`,
        title: `There was a problem loading the conversation metadata`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "conversation metadata",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useConversationMetadata.tsx#L70`,
        title: `There was a problem saving the conversation metadata`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "save",
            sub_entity: "conversation metadata",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFeatureSwitch.tsx#L36`,
        title: `Failed to create new feature`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "feature",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L96`,
        title: `Flow creation failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "flow",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L115`,
        title: `Flow duplication failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "duplicate",
            sub_entity: "flow",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L129`,
        title: `Flows duplication failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "duplicate",
            sub_entity: "flows",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L149`,
        title: `Flow detachment failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "detach",
            sub_entity: "flow",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L167`,
        title: `Flow renaming failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "rename",
            sub_entity: "flow",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L181`,
        title: `Flow deletion failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "flow",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L195`,
        title: `Flows deletion failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "flows",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L210`,
        title: `Flow deletion failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "flow",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L225`,
        title: `Flows fetching failed`,
        body: `Message: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "fetch",
            sub_entity: "flows",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useMetrics.tsx#L24`,
        title: `Failed to get list for autocompletion`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "obtain",
            sub_entity: "autocompletion",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useNodes.tsx#L31`,
        title: `Failed to get list for autocompletion`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "obtain",
            sub_entity: "autocompletion",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/usePrompts.tsx#L100`,
        title: `Create prompt failed`,
        body: `Create prompt failed.`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "prompt"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/usePrompts.tsx#L121`,
        title: `Delete prompt failed`,
        body: `Delete prompt failed.`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "prompt"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/usePrompts.tsx#L121`,
        title: `Edit prompt failed`,
        body: `Edit prompt failed.`,
        type: "user",
        status: "error",
        message: {
            action: "edit",
            sub_entity: "prompt"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useScenarios.tsx#L66`,
        title: `There was a problem loading the scenario`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "scenario",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useScenarios.tsx#L87`,
        title: `There was a problem loading the scenarios`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "scenarios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useScenarios.tsx#L147`,
        title: `There was a problem loading the scenario results`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "load",
            sub_entity: "scenario results",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useScenarios.tsx#L174`,
        title: `There was a problem deleting the scenarios`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "scenarios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useScenarios.tsx#L191`,
        title: `Failed to download scenarios CSV`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "download",
            sub_entity: "scenarios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useScenarios.tsx#L229`,
        title: `There was a problem uploading the scenarios`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "upload",
            sub_entity: "scenarios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useScenarios.tsx#L266`,
        title: `There was a problem uploading the scenarios`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "upload",
            sub_entity: "scenarios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useTelephony.tsx#L51`,
        title: `Unable to fetch telephony routes`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "fetch",
            sub_entity: "telephony routes",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useTelephony.tsx#L71`,
        title: `Unable to create telephony routes`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "telephony route",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useTelephony.tsx#L91`,
        title: `Unable to edit telephony route`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "edit",
            sub_entity: "telephony route",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useTelephony.tsx#L111`,
        title: `Unable to edit telephony route`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "edit",
            sub_entity: "telephony route",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useTelephony.tsx#L135`,
        title: `Unable to create fallback`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "telephony fallback",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useTelephony.tsx#L158`,
        title: `Unable to edit fallback`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "edit",
            sub_entity: "telephony fallback",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useUtilities.tsx#L44`,
        title: `Failed to get utility`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "get",
            sub_entity: "utility",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useUtilities.tsx#L85`,
        title: `Failed to update utility`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "utility",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useVariants.tsx#L47`,
        title: `Duplicate variant failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "duplicate",
            sub_entity: "variant",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useVariants.tsx#L47`,
        title: `Create variant failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "variant",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: "Maybe remove 'flow' from sub_entity to keep it consistent with the other variant errors",
        link: `hooks/useVariants.tsx#L65`,
        title: `Updating flow variants failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "flow variants",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useVariants.tsx#L84`,
        title: `Deleting variant failed`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "variant",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useApiIntegrationMutations.tsx#L47`,
        title: `Create API integration failed`,
        body: `Create API integration failed.`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "API integration",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useApiIntegrationMutations.tsx#L71`,
        title: `Update API integration failed`,
        body: `Update API integration failed.`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "API integration",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useApiIntegrationMutations.tsx#L86`,
        title: `Delete API integration failed`,
        body: `Delete API integration failed.`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "API integration",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useCanvas/addNodes.tsx#L85`,
        title: `Error creating Node(s)`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "node(s)",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useCanvas/addNodes.tsx#L159`,
        title: `Error duplicating Node(s)`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "duplicate",
            sub_entity: "node(s)",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useCanvas/deleteNodes.tsx#L41`,
        title: `Error deleting node`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "node",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useCanvas/deleteNodes.tsx#L89`,
        title: `Error deleting nodes`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "nodes",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useCanvas/moveNodes.tsx#L69`,
        title: `Failed to update node position`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "node position",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: "Maybe change from 'Failed to move nodes' to 'Failed to update node positions' to keep it consistent with the other move node errors.",
        link: `hooks/useCanvas/moveNodes.tsx#L124`,
        title: `Failed to move nodes`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "move",
            sub_entity: "nodes",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useCanvas/updateNodes.tsx#L111`,
        title: `Error updating node`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "node",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useConversationsLog/useConversations.tsx#L103`,
        title: `Failed to download conversations review xlsx`,
        body: `Failed to download conversations review xlsx`,
        type: "user",
        status: "error",
        message: {
            action: "download",
            sub_entity: "conversations review",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useNluDataset/useCreateNluExamples.tsx#L80`,
        title: `Training example creation failed`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "create",
            sub_entity: "training example",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useNluDataset/useDeleteIntents.tsx#L34`,
        title: `Intent deletion failed`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "intent",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useNluDataset/useDeleteNluExample.tsx#L51`,
        title: `Training example deletion failed`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "training example",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useNluDataset/useDownloadNluDataset.tsx#L15`,
        title: `Get intent csv failed`,
        body: `Failed to download Intent CSV.`,
        type: "user",
        status: "error",
        message: {
            action: "download",
            sub_entity: "Intent CSV"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: "'fetch' vs 'get'? - how should we standardise this.",
        link: `hooks/useNluDataset/useQueryNluDataset.tsx#L75`,
        title: `Intent fetching failed`,
        body: `Message: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "fetch",
            sub_entity: "intent",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useNluDataset/useRenameIntent.tsx#L35`,
        title: `Intent renaming failed`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "rename",
            sub_entity: "intent",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useNluDataset/useUpdateKeywords.tsx#L48`,
        title: `Keyword update failed`,
        body: `&lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "keyword",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useProjectSettings/useProjectSettings.tsx#L56`,
        title: `Failed to load project`,
        body: `Project loading failed: &lterror_message&gt`,
        type: "user",
        status: "error",
        entity_id: ["<project>"],
        message: {
            action: "load",
            sub_entity: "project",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useProjectSettings/useProjectSettings.tsx#L116`,
        title: `Get dashboards failed`,
        body: `Failed to get dashboards: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "get",
            sub_entity: "dashboards",
            body: "<error_message>"
        },
        metadata: {
            call_to_action: "Try again"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useProjectSettings/useProjectSettings.tsx#L141`,
        title: `Update dashboards failed`,
        body: `Failed to update dashboards: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "update",
            sub_entity: "dashboards",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useProjectSettings/useProjectSettings.tsx#L163`,
        title: `Delete dashboards failed`,
        body: `Failed to delete dashboards: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "dashboards",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useProjectSettings/useProjectSettings.tsx#L180`,
        title: `Failed to update the project`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "delete",
            sub_entity: "dashboards",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/analytics/index.tsx#L47`,
        title: `Failed to fetch dashboard`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "fetch",
            sub_entity: "dashboard",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>",
            call_to_action: "Try again"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/audio/uploadPanel.tsx#L72`,
        title: `File format not match`,
        body: `Please upload the correct file format.`,
        type: "user",
        status: "error",
        message: {
            action: "import",
            sub_entity: "file",
            body: "Incorrect file format."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/audio-details/components/AudioDetailFileUpload/AudioDetailsFileUpload.tsx#L125`,
        title: `File format not match`,
        body: `Please upload the correct file format.`,
        type: "user",
        status: "error",
        message: {
            action: "import",
            sub_entity: "file",
            body: "Incorrect file format."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/audio-details/components/AudioDetailFileUpload/AudioDetailsFileUpload.tsx#L178`,
        title: `Registering audios failed`,
        body: `Registering audios failed error: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "register",
            sub_entity: "audios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/audio-details/components/AudioDetailFileUpload/AudioDetailsFileUpload.tsx#L185`,
        title: `Uploading audios failed`,
        body: `Audio upload failed error: &lterror_message&gt`,
        type: "user",
        status: "error",
        message: {
            action: "upload",
            sub_entity: "audios",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/audio-details/components/AudioDetailFileUpload/AudioDetailsFileUpload.tsx#L236`,
        title: `Recording failed`,
        body: `We&apos;re sorry the recording failed, please try again.`,
        type: "user",
        status: "error",
        message: {
            action: "record",
            sub_entity: "audio"
        },
        metadata: {
            call_to_action: "Try again"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/data-store-details/components/DataStoreDetails/index.tsx#L84`,
        title: `Invalid JSON`,
        body: `The content of the code input is not a valid JSON.`,
        type: "user",
        status: "error",
        message: {
            title: "Invalid JSON"
        },
        categories: []
    },
    {
        link: `screens/data-store-details/components/DataStoreDetails/index.tsx#L168`,
        title: `File(s) update failed`,
        body: ``,
        type: "user",
        status: "error",
        entity_id: ["<file>"],
        message: {
            action: "update",
            sub_entity: "file(s)"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/faq-editor/index.tsx#L106`,
        title: `File save failed`,
        body: `The file failed to save with error: &lterror_message&gt`,
        type: "user",
        status: "error",
        entity_id: ["<file>"],
        message: {
            action: "save",
            sub_entity: "file",
            body: "<error_message>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/settings-variant/VariantSettings.screen.tsx#L74`,
        title: `Failed to rename variant`,
        body: `Message: &lterror_message&gt

Error code: &lterror_code&gt`,
        type: "user",
        status: "error",
        message: {
            action: "rename",
            sub_entity: "variant",
            body: "<error_message>"
        },
        metadata: {
            error_code: "<error_code>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/ProjectNavigation/Card.tsx#L145`,
        title: `Project deleted`,
        body: `&ltproject_name&gt has been successfully deleted.`,
        type: "user",
        status: "success",
        message: {
            action: "deleted",
            sub_entity: "project",
            body: "<project_name> has been successfully deleted."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useFlows.tsx#L108`,
        title: `Successfully duplicated flow`,
        body: `Duplicate succeed.`,
        type: "user",
        status: "success",
        message: {
            action: "duplicated",
            sub_entity: "flow",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useVariants.tsx#L43`,
        title: `Variant successfully duplicated`,
        body: ``,
        type: "user",
        status: "success",
        message: {
            action: "duplicated",
            sub_entity: "variant"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useVariants.tsx#L43`,
        title: `Variant successfully created`,
        body: ``,
        type: "user",
        status: "success",
        message: {
            action: "created",
            sub_entity: "variant"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: "Consider an 'Undo' call to action? -> not sure how it would interact with the notification history...",
        link: `hooks/useVariants.tsx#L77`,
        title: `Variant deleted`,
        body: `Variant deleted successfully.`,
        type: "user",
        status: "success",
        message: {
            action: "deleted",
            sub_entity: "variant"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: "Consider an 'Undo' call to action? -> not sure how it would interact with the notification history...",
        link: `hooks/useCanvas/deleteNodes.tsx#L31`,
        title: `Node deleted`,
        body: `The node was deleted successfully.`,
        type: "user",
        status: "success",
        message: {
            action: "deleted",
            sub_entity: "node"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: "Consider an 'Undo' call to action? -> not sure how it would interact with the notification history...",
        link: `hooks/useCanvas/deleteNodes.tsx#L77`,
        title: `Nodes deleted`,
        body: `The nodes: &ltnode&gt, ... were deleted successfully.`,
        type: "user",
        status: "success",
        message: {
            action: "deleted",
            sub_entity: "nodes",
            body: "The nodes: <node>, ... were deleted successfully."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `hooks/useDeployment/useDeployment.tsx#L118`,
        title: `Successfully published to production`,
        body: ``,
        type: "user",
        status: "success",
        message: {
            action: "published",
            sub_entity: "to production"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/audio-details/components/AudioDetailFileUpload/AudioDetailsFileUpload.tsx#L230`,
        title: `Successfully added recording`,
        body: `Recording made with voice clone &ltvoice_name&gt has been added to the prompt.`,
        type: "user",
        status: "success",
        message: {
            action: "added",
            sub_entity: "recording",
            body: "Recording made with voice clone <voice_name> has been added to the prompt."
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        note: "How should this be handled in terms of entity_id?",
        link: `screens/data-store-details/components/DataStoreDetails/index.tsx#L160`,
        title: `File(s) updated`,
        body: `Successfully updated the file(s) &ltfile_name&gt for &ltenvs&gt`,
        type: "user",
        status: "success",
        message: {
            action: "updated",
            sub_entity: "file(s)",
            body: "Successfully updated the file(s) <file_name> for <envs>"
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/faq-editor/index.tsx#L98`,
        title: `File saved`,
        body: `The file &ltfile_name&gt saved successfully.`,
        type: "user",
        status: "success",
        entity_id: ["<file_name>"],
        message: {
            action: "saved",
            sub_entity: "file",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `screens/settings-user/UserSettings.screen.tsx#L51`,
        title: `User timezone updated successfully`,
        body: ``,
        type: "user",
        status: "success",
        message: {
            action: "updated",
            sub_entity: "timezone",
        },
        categories: [
            "{state} {action} {entity}"
        ]
    },
    {
        link: `components/organisms/Canvas/Controls.tsx#L77`,
        title: `Unable to copy a start node`,
        body: `We&apos;re sorry but you can only have one start node per project:
- &ltnode&gt`,
        type: "user",
        status: "info",
        message: {
            title: "Unable to copy a start node",
            body: `We're sorry but you can only have one start node per project:
- <node>`
        },
        categories: []
    },
    {
        link: `hooks/useDeployment/useDeployment.tsx#L140`,
        title: `&ltdeployment_error_message&gt`,
        body: ``,
        type: "user",
        status: "info",
        message: {
            title: "<deployment_error_message>"
        },
        categories: []
    },
    {
        link: `hooks/useDeployment/useDeploymentMutations.tsx#L97`,
        title: `Validation warning`,
        body: `&ltwarnings&gt`,
        type: "user",
        status: "info",
        message: {
            title: "Validation warning",
            body: "<warnings>"
        },
        categories: []
    },
    {
        link: `hooks/useDeployment/useDeploymentMutations.tsx#L147`,
        title: `There is already an ongoing deployment`,
        body: `Please try again later once the current deployment has completed.`,
        type: "user",
        status: "info",
        message: {
            title: "There is already an ongoing deployment",
            body: "Please try again later once the current deployment has completed."
        },
        categories: []
    },
    {
        link: `hooks/useDeployment/useDeploymentMutations.tsx#L244`,
        title: `Sandbox deployment already published`,
        body: ``,
        type: "user",
        status: "info",
        message: {
            title: "Sandbox deployment already published"
        },
        categories: []
    },
    {
        link: `screens/utility-details/UtilityDetailsScreen.tsx#L58`,
        title: `Your changes have been discarded`,
        body: ``,
        type: "user",
        status: "info",
        message: {
            title: "Your changes have been discarded"
        },
        categories: []
    },
];
let notifCategory = {
    "{state} {action} {entity}": function (notif) {
        let message = notif.message;
        let title;
        if (notif.status === "error")
            if (RHU.exists(message.sub_entity))
                title = `Failed to ${message.action} ${message.sub_entity}`;
            else
                title = `Failed to ${message.action}`;
        else if (RHU.exists(message.sub_entity))
            title = `Successfully ${message.action} ${message.sub_entity}`;
        else
            title = `Successfully ${message.action}`;
        return {
            title: title,
            body: ""
        };
    }
};
