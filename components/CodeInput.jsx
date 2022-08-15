import React, { useCallback } from 'react';
import { FormField } from '@sanity/base/components'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/mode-javascript"
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'

const CodeInput =  React.forwardRef((props, ref) => {
    const { 
        type,         // Schema information
        value,        // Current field value
        markers,      // Markers including validation rules
        presence,     // Presence information for collaborative avatars
        onChange      // Method to handle blur state  
      } = props

      const codeChange = useCallback((code) => {
        onChange(PatchEvent.from(code ? set(code) : unset()))
      })

return (
  <FormField
    description={type.description}  // Creates description from schema
    title={type.title}              // Creates label from schema title
    __unstable_markers={markers}    // Handles all markers including validation
    __unstable_presence={presence}  // Handles presence avatars
  >
    <AceEditor mode="javascript" name="ace-deitor-code" width="100%" theme="github" style={{ boxShowdow: '0 0 0 1px #cad1dc', lineHeight: 1.6,}} ref={ref}  value={value || ''} tabSize={2} setOptions={{useWorker: false}} onChange={codeChange}/>
  </FormField>
)
});

export default CodeInput;