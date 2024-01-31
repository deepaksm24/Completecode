// LeftPanel.js

import React from "react";
import { Collapse, Popconfirm, Tree } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { downloadFile } from "../../api/users";

const { Panel } = Collapse;

const LeftPanel = ({ fileData }) => {
  const handleDownload = async (fileId, filename) => {
    try {
      // Download logic remains the same
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const transformControllerData = (controllerArray) => {
    return controllerArray.map((item, index) => ({
      key: item,
      title: item,
      children: [], // You can add children based on your data structure
    }));
  };

  return (
    <div
      className="bg-light bg-gradient"
      style={{
        padding: "8px",
        overflowY: "auto",
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        height: "100vh",
      }}
    >
      <Collapse accordion>
        {fileData.map((file) => (
          <Panel
            header={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span className="h6">{file.filename}</span>
                <Popconfirm
                  title="Are you sure you want to download this file?"
                  onConfirm={() => handleDownload(file.fileId, file.filename)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DownloadOutlined style={{ fontSize: "20px", color: "blue" }} />
                </Popconfirm>
              </div>
            }
            key={file.fileId}
          >
            {/* <p>File ID: {file.fileId}</p> */}
            {/* <p>File Time: {file.filetime}</p> */}

            {/* Render Ant Design Tree */}
            <Tree
              showLine
              switcherIcon={<DownloadOutlined />}
              defaultExpandedKeys={['0-0-0']}
              treeData={transformControllerData(file.filetree.RSLogix5000Content.Controller)}
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default LeftPanel;
