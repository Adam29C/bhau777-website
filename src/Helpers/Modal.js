import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Modal_Component = ({ RowData, setShow, show }) => {

  return (
    <div>
      <Modal show={show} centered onHide={setShow} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{RowData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped>
            <thead className="text-center bg-primary">
              <tr>
                <th>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Open Bid Time
                </th>
                <th>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Close Bid
                  Time
                </th>
                <th>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Open Bid
                  Result Time
                </th>
                {RowData?.CBRT && (
                  <th>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> Close Bid
                    Result Time
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>{RowData?.OBT}</td>
                <td>{RowData?.CBT}</td>
                <td>{RowData?.OBRT}</td>
                <td>{RowData?.CBRT}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modal_Component;
