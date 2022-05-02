package edu.cooper.ece366.project.server.model;


//This class is specifically for showcasing meeting data on the frontend
public class MeetingView {

    public MeetingView() {
    }

    //ID of meeting
    private Long id;

    //name of person meeting with
    private String nameWith;

    //picture of person meeting with
    private String imgUrl;

    //memo
    private String memo;

    //start time
    private String startTime;

    //end time
    private String endTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameWith() {
        return nameWith;
    }

    public void setNameWith(String nameWith) {
        this.nameWith = nameWith;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
