'use client'
import React, { useEffect } from 'react';
import ReactJson from 'react-json-view';

export default function JsonEditor () {

  function getData () {
    fetch(`/api/videos`, { method: 'GET', cache: "no-cache" }).then(res => { return res.json() }).then(res => {
      setJson(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])
  const [json, setJson] = React.useState({});

  function handleEdit (updatedJson) {
    console.log('Edit:', updatedJson.updated_src);
    // 更新JSON数据
    setJson(updatedJson.updated_src);
    fetch(`/api/videos`, { method: 'POST', cache: "no-cache", body: JSON.stringify(updatedJson.updated_src) })
  }

  return (
    <div>
      <h1>抖音 Editor</h1>
      <ReactJson
        src={json}
        onEdit={handleEdit}
        onDelete={handleEdit}
        onAdd={handleEdit}
        displayDataTypes={false}
        enableClipboard={false}
        indentWidth={2}
        name={null}
        style={{ padding: '10px' }}
      />
    </div>
  );
}
