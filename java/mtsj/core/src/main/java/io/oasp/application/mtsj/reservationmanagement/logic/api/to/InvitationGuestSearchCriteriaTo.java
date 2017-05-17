package io.oasp.application.mtsj.reservationmanagement.logic.api.to;

import java.sql.Timestamp;

import io.oasp.module.jpa.common.api.to.SearchCriteriaTo;

/**
 * This is the {@link SearchCriteriaTo search criteria} {@link net.sf.mmm.util.transferobject.api.TransferObject TO}
 * used to find {@link io.oasp.application.mtsj.reservationmanagement.common.api.InvitationGuest}s.
 *
 */
public class InvitationGuestSearchCriteriaTo extends SearchCriteriaTo {

  private static final long serialVersionUID = 1L;

  private Long reservationId;

  private String guestToken;

  private String email;

  private Boolean accepted;

  private Timestamp modificationDate;

  /**
   * The constructor.
   */
  public InvitationGuestSearchCriteriaTo() {

    super();
  }

  public Long getReservationId() {

    return this.reservationId;
  }

  public void setReservationId(Long reservationId) {

    this.reservationId = reservationId;
  }

  public String getGuestToken() {

    return this.guestToken;
  }

  public void setGuestToken(String guestToken) {

    this.guestToken = guestToken;
  }

  public String getEmail() {

    return this.email;
  }

  public void setEmail(String email) {

    this.email = email;
  }

  public Boolean isAccepted() {

    return this.accepted;
  }

  public void setAccepted(Boolean accepted) {

    this.accepted = accepted;
  }

  public Timestamp getModificationDate() {

    return this.modificationDate;
  }

  public void setModificationDate(Timestamp modificationDate) {

    this.modificationDate = modificationDate;
  }

}